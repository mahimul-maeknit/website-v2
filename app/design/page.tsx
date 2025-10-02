"use client"

import SiteLayout from "@/components/site-layout"

export default function DesignPage() {
  return (
    <SiteLayout>
      <section className="onboarding-content-frame" aria-label="Onboarding">
        <div className="onboarding-grid">
          {/* I AM A */}
          <div className="onboarding-panel">
            <h2 className="static-panel-title">I AM A:</h2>
            <ul className="option-list">
              {["Brand", "Designer", "Buyer", "Factory", "Student"].map((item) => (
                <li key={item}>
                  <label>
                    {item}
                    <input type="radio" name="iam" value={item.toLowerCase()} />
                    <span className="radio-indicator" />
                  </label>
                </li>
              ))}
              <li>
                <label>
                  Other:
                  <input type="radio" name="iam" value="other" />
                  <span className="radio-indicator" />
                </label>
              </li>
            </ul>
          </div>

          {/* I AM INTERESTED IN */}
          <div className="onboarding-panel">
            <h2 className="static-panel-title">I AM INTERESTED IN:</h2>
            <ul className="option-list">
              {["Development", "Production", "Swatching", "Education", "Employment"].map((item) => (
                <li key={item}>
                  <label>
                    {item}
                    <input type="checkbox" name="interest" value={item.toLowerCase()} />
                    <span className="radio-indicator" />
                  </label>
                </li>
              ))}
              <li>
                <label>
                  Other:
                  <input type="checkbox" name="interest" value="other" />
                  <span className="radio-indicator" />
                </label>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="onboarding-panel">
            <h2 className="static-panel-title">CONTACT:</h2>
            <form className="contact-form">
              <label>
                Name:
                <input type="text" name="name" placeholder="Your Name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" placeholder="your@email.com" />
              </label>
              <label>
                A bit more about your project:
                <textarea name="project" rows={4} placeholder="Tell us more..." />
              </label>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
