import PageFooter from "@/components/page-footer"
import PageHeader from "@/components/header"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />
      <main id="main">
        <section id="contact" className="section section-muted">
          <div className="container">
            <h2>Book a Consultation</h2>
            <p className="subheading">Transparent, responsive, built to match the rhythm of modern design.</p>
            <div className="cta-row">
              <a className="btn" href="mailto:hello@maeknit.example">Email us</a>
              <Link className="btn btn-ghost" href="/labs">Explore our labs</Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  )
}
