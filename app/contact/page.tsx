import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
