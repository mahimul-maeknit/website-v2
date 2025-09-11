export function getConfig() {
    return {
      ODOO_URL: process.env.ODOO_URL || "",
      ODOO_DB: process.env.ODOO_DB || "",
      ODOO_USERNAME: process.env.ODOO_USERNAME || "",
      ODOO_PASSWORD: process.env.ODOO_PASSWORD || "",
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "",
      GOOGLE_SHEETS_WEBHOOK_URL: process.env.GOOGLE_SHEETS_WEBHOOK_URL || "",
    }
  }
  