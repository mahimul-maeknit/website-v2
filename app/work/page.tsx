import PageFooter from "@/components/page-footer"
import PageHeader from "@/components/page-header"

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Work" />
      <main id="main">
        <section id="work" className="section">
          <div className="container">
            <h2>Our Work</h2>
            <p className="subheading">
              The future of the factory — technical excellence, zero-waste principles, and responsive production.
            </p>
            <div className="work-grid">
              <div className="work-card">
                <div className="media" role="img" aria-label="Project placeholder"></div>
                <div className="work-meta">
                  <p className="caps">Prototype to Production</p>
                  <p>End-to-end engagement for rapid scale-up.</p>
                </div>
              </div>
              <div className="work-card">
                <div className="media" role="img" aria-label="Project placeholder"></div>
                <div className="work-meta">
                  <p className="caps">WholeGarment R&amp;D</p>
                  <p>Advanced 3D programming and linking solutions.</p>
                </div>
              </div>
              <div className="work-card">
                <div className="media" role="img" aria-label="Project placeholder"></div>
                <div className="work-meta">
                  <p className="caps">Material Innovation</p>
                  <p>Performance yarns curated for quality and provenance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  )
}
