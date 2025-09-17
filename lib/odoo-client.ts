/* eslint-disable @typescript-eslint/no-explicit-any */
import xmlrpc from "xmlrpc"
import { getConfig } from "./config.js"

// Interest → Odoo CRM Tag mapping
const interestToOdooTagMap: Record<string, string> = {
  "Rapid Prototyping": "Development",
  Production: "Production",
  Swatching: "Swatch Packages",
}

// Identity → Odoo Contact Type mapping
const identityToContactTypeMap: Record<string, string> = {
  Brand: "brand",
  Vendor: "vendor",
  Student: "student",
  Factory: "factory",
  Designer: "brand",
  Buyer: "buyer",
}

type LeadData = {
  name: string
  email: string
  interests: string[]
  identity: string
  message: string
  userCity: string
  userCountry: string
  userCountryCode: string
}

/**
 * Resolve tag IDs from interest values
 */
function getTagIds(
  models: unknown,
  db: string,
  uid: number,
  password: string,
  interests: string[],
): Promise<number[]> {
  const tags = interests.length ? interests : ["Development"]
  const uniqueNames = [...new Set(tags.map((i) => interestToOdooTagMap[i] || "Development"))]

  return new Promise((resolve, reject) => {
    models.methodCall(
      "execute_kw",
      [db, uid, password, "crm.tag", "search_read", [[["name", "in", uniqueNames]]], { fields: ["id", "name"] }],
      (err: Error | null, records: { id: number; name: string }[]) => {
        if (err) {
          console.error("❌ Failed to fetch tags:", err)
          return reject(err)
        }
        const tagIds = records.map((r) => r.id)
        console.log("✅ Matched tag IDs:", tagIds)
        resolve(tagIds)
      },
    )
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCountryId(
  models: any,
  db: string,
  uid: number,
  password: string,
  countryCode: string,
): Promise<number | null> {
  return new Promise((resolve, reject) => {
    models.methodCall(
      "execute_kw",
      [db, uid, password, "res.country", "search_read", [[["code", "=", countryCode]]], { fields: ["id"], limit: 1 }],
      (err: Error | null, result: { id: number }[]) => {
        if (err) {
          console.error("❌ Failed to find country:", err)
          return reject(err)
        }
        if (!result || result.length === 0) {
          console.warn("⚠️ No country found for code:", countryCode)
          return resolve(null)
        }
        resolve(result[0].id)
      },
    )
  })
}

/**
 * Create Odoo Lead
 */
export async function createOdooLead(leadData: LeadData): Promise<number> {
  const { ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD } = getConfig()
  console.log("⚙️ Starting Odoo lead creation...")

  const authURL = `${ODOO_URL}/xmlrpc/2/common`
  const objectURL = `${ODOO_URL}/xmlrpc/2/object`

  const common = xmlrpc.createClient({ url: authURL })
  const models = xmlrpc.createClient({ url: objectURL })

  // Authenticate
  const uid: number = await new Promise((resolve, reject) => {
    common.methodCall(
      "authenticate",
      [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {}],
      (err: Error | null, userId: number) => {
        if (err || !userId) {
          console.error("❌ Odoo auth failed:", err)
          return reject(err || new Error("No UID"))
        }
        resolve(userId)
      },
    )
  })

  const isCompany = ["Brand", "Vendor", "Factory"].includes(leadData.identity)
  const contactType = identityToContactTypeMap[leadData.identity] || "individual"

  const countryId = await getCountryId(models, ODOO_DB, uid, ODOO_PASSWORD, leadData.userCountryCode)

  // Step 1: Create contact
  const contactId: number = await new Promise((resolve, reject) => {
    const payload = {
      name: leadData.name || leadData.email,
      email: leadData.email,
      is_company: isCompany,
      contact_type: contactType,
      city: leadData.userCity || "",
      ...(countryId && { country_id: countryId }),
    }
    models.methodCall(
      "execute_kw",
      [ODOO_DB, uid, ODOO_PASSWORD, "res.partner", "create", [payload]],
      (err: Error | null, id: number) => {
        if (err || !id) {
          console.error("❌ Failed to create contact:", err)
          return reject(err || new Error("Contact creation failed"))
        }
        console.log("✅ Contact created with ID:", id)
        resolve(id)
      },
    )
  })

  // Step 2: Resolve tags
  const tag_ids = await getTagIds(models, ODOO_DB, uid, ODOO_PASSWORD, leadData.interests)

  // Step 3: Create lead
  return new Promise((resolve, reject) => {
    const payload = {
      name: leadData.name || leadData.email,
      contact_name: leadData.name || leadData.email,
      email_from: leadData.email,
      partner_id: contactId,
      tag_ids: [[6, 0, tag_ids]],
      description: `Name: ${leadData.name || "N/A"}\nInterests: ${leadData.interests.join(", ")}, Identity: ${leadData.identity}, Message: ${leadData.message}`,
    }
    models.methodCall(
      "execute_kw",
      [ODOO_DB, uid, ODOO_PASSWORD, "crm.lead", "create", [payload]],
      (err: Error | null, id: number) => {
        if (err) {
          console.error("❌ Failed to create lead:", err)
          return reject(err)
        }
        console.log("✅ Lead created with ID:", id)
        resolve(id)
      },
    )
  })
}
