/***
import { createOdooLead } from "../lib/odooClient"

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const data = req.body
    console.log("Webhook received from Chatwoot:", data.event)

    // Extract contact information from the webhook payload
    const sender = data.meta?.sender || data.sender || {}
    const additionalAttributes = sender.additional_attributes || {}
    const customAttributes = sender.custom_attributes || {}

    // Get the first message content if available
    const firstMessage = data.messages && data.messages.length > 0 ? data.messages[0] : {}
    const messageContent = firstMessage.content || data.content || ""

    // Create lead data object formatted for your existing odooClient
    const userData = {
      name: sender.name || "",
      email: sender.email || "",
      // Use custom attributes from Chatwoot if available, otherwise use defaults
      interests: customAttributes.interests || ["Rapid Prototyping"],
      identity: customAttributes.identity || "Brand",
      message: messageContent,
      userCity: additionalAttributes.city || "",
      userCountry: additionalAttributes.country || "",
      userCountryCode: additionalAttributes.country_code || "",
      source: "chatwoot_webhook",
    }

    // Only proceed if we have at least an email
    if (!userData.email) {
      console.log("No email found in webhook data, skipping Odoo lead creation")
      return res.status(200).json({
        success: false,
        message: "No email found in contact data, skipping lead creation",
      })
    }

    console.log("Creating Odoo lead with data:", userData)

    // Create the lead in Odoo using your existing implementation
    const leadId = await createOdooLead(userData)

    // Log success
    console.log("Odoo lead created successfully:", leadId)

    return res.status(200).json({
      success: true,
      message: "Lead created in Odoo successfully",
      odooId: leadId,
    })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return res.status(500).json({
      success: false,
      message: "Error processing webhook: " + error.message,
    })
  }
}

***/