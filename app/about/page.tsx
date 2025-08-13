import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link" // Added Link import for the CTA buttons

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Moved "Redefining Knitwear" section here from homepage */}
        <section className="section">
          <div className="container prose">
            <h2>Redefining Knitwear</h2>
            <p className="subheading">
              We streamline the knitwear process with no minimums, no delays, and no compromises.
            </p>
            <div className="cta-row">
              <Link className="btn" href="/contact">
                Book a Consultation
              </Link>
              <Link className="btn btn-ghost" href="/labs">
                Explore Our Labs
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="section section-muted">
          {" "}
          {/* Added section-muted for visual separation */}
          <div className="container prose">
            <h2>About</h2>
            <p>
              We streamline the knitwear process with no minimums, no delays, and no compromises. Our end-to-end model
              connects designers with expert technicians, bridging the gap between concept and production through
              precision, speed, and craft.
            </p>
            <p>
              At MAEKNIT, we bring advanced knitting technology, zero-waste labs, and expert support to help brands move
              from sketch to shelf in record time. Our team of knitwear designers, programmers, and technicians partner
              with you at every step, from first prototype to scalable production.
            </p>
            <h3 className="body-subheading caps">Reshoring with intention</h3>
            <p>
              With laboratories in New York and London and a global production network, we bring technical excellence
              back to the center of fashion. We don&apos;t just accelerate timelines — we redesign the system.
              Transparent, responsive, and built to match the rhythm of modern design.
            </p>
            <p>
              We collaborate with brands, retailers and emerging designers to bring ideas to life — whether it&apos;s a
              single sample or a full collection. Every piece we produce reflects discipline, care, and a lifetime of
              experience. We manage the complexity behind the scenes, so you receive exactly what you envisioned — on
              time, at scale, without compromise. Delivered to your studio, showroom, or doorstep.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
