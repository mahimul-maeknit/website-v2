import Footer from "@/components/footer"
import Header from "@/components/header"

export default function LabsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section id="labs" className="section section-muted">
          <div className="container">
            <p className="eyebrow caps">Our Labs</p>
            <div className="labs-grid">
              <article className="lab">
                <h3 className="card-title">New York</h3>
                <p>
                  Our 3,600-square-foot lab in Jamaica, Queens, is home to a skilled team of knitwear engineers and state-of-the-art equipment — handling everything from prototyping to small-run production.
                </p>
                <h4 className="lab-subtitle">Machine List (NYC)</h4>
                <ul className="mono-list">
                  <li>STOLL: CMS 530 7.2</li>
                  <li>STOLL: CMS 530 3.5.2</li>
                  <li>STOLL: CMS 822 7.2</li>
                  <li>SHIMA SEIKI: SWG 091 N2 18gg (WholeGarment)</li>
                </ul>
                <h4 className="lab-subtitle">Linkers</h4>
                <p>18gg, 16gg, 14gg, 12gg, 10gg, 7gg, 5gg</p>
              </article>
              <article className="lab">
                <h3 className="card-title">London, UK</h3>
                <p>
                  Located in the Harringay Warehouse District as part of the Fashion Enter network. A collaborative space dedicated to fast, flexible knitwear development, where creativity meets industrial-grade production.
                </p>
                <h4 className="lab-subtitle">Machine List (London)</h4>
                <ul className="mono-list">
                  <li>SHIMA SEIKI: 122FF 5gg</li>
                  <li>SHIMA SEIKI: SWG091N2 10gg</li>
                  <li>SHIMA SEIKI: NSSR112V 7gg</li>
                  <li>SHIMA SEIKI: NSSSR112V 12gg</li>
                </ul>
                <h4 className="lab-subtitle">Linkers</h4>
                <p>5gg, 7gg, 9gg, 12gg, 14gg</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
