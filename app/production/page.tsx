import PageFooter from "@/components/page-footer"
import PageHeader from "@/components/page-header"

export default function ProductionPage() {
  return (
    <>
      <PageHeader title="Production" />
      <main id="main">
        <section id="production" className="section">
          <div className="container prose">
            <h2>Production</h2>
            <p>
              MAEKNIT offers small-batch and on-demand production in our zero-waste labs in New York and London — built for speed, flexibility, and precision. For larger orders, we partner with a trusted global network of mills and manufacturers across the USA, UK, Peru, Turkey, Romania, Bulgaria, Spain, Bangladesh, Canada, Madagascar & more.
            </p>
            <p>No minimums. Transparent pricing. Clean, energy-efficient machinery.</p>
            <p>
              Whether you&apos;re developing a single standout piece or scaling a full collection, we adapt to your needs — with the same standard of excellence at every level. The future of knitwear is responsive. We&apos;re built to move with you. From one piece to thousands, without compromise.
            </p>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  )
}
