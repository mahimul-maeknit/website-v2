import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section id="services" className="section section-muted">
          <div className="container">
            <p className="eyebrow caps">Services</p>
            <div className="cards">
              <article className="card">
                <h3 className="card-title">Swatches</h3>
                <p className="subheading">Swatches are the blueprint of exceptional knitwear.</p>
                <p>
                  We offer an extensive in-house yarn library and source specialty yarns from leading mills around the world — curated for quality, provenance, and performance. All swatches are knit in our New York or London labs using industry-standard machinery, ensuring what you sample is what goes into production.
                </p>
                <p>
                  Our swatch packages invite experimentation — across materials, stitch structures, and finishes — without limitations. Track your development in real time through our collaborative digital whiteboard, designed to help you organize, refine, and evolve your collection.
                </p>
                <p className="note">Delivered in 1–2 weeks. Fast. Focused. Built for the way you work.</p>
                <Link href="/contact" className="btn btn-ghost">Book a consultation</Link>
              </article>
              <article id="development" className="card">
                <h3 className="card-title">Development</h3>
                <p className="subheading">From vision to precision.</p>
                <p>
                  We take you from concept to couture— without compromising craft. Our expert team of technicians, knitwear programmers, linkers, and 3D specialists delivers fully fashioned knitwear with speed, accuracy, and intention.
                </p>
                <p>
                  Using advanced tools — including 3D modeling, virtual mannequins, and real-time simulation — we bring your ideas to life while minimizing waste, revisions, and guesswork. Work with us in person in New York or London, or collaborate remotely from anywhere in the world.
                </p>
                <Link href="/contact" className="btn btn-ghost">Book a consultation</Link>
              </article>
              <article id="education" className="card">
                <h3 className="card-title">Education</h3>
                <p className="subheading">Training the next generation of knitwear leaders.</p>
                <p>
                  Hands-on, in-house instruction led by seasoned industry professionals. Gain real-world experience across every stage of knitwear development — no gatekeeping, no guesswork.
                </p>
                <ul className="bullets">
                  <li>Knit and link garments</li>
                  <li>Program industrial machines</li>
                  <li>Build 3D visuals, avatars, and virtual mannequins</li>
                  <li>Create precise tech packs</li>
                  <li>Source materials and evaluate factory capabilities</li>
                </ul>
                <Link href="/contact" className="btn btn-ghost">Book a consultation</Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
