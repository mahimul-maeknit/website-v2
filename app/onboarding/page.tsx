import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import OnboardingForm from "@/components/onboarding-form"

export default function OnboardingPage() {
  return (
    <>
      <PageHeader title="ONBOARDING" />

      <main className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <OnboardingForm />
          </div>
        </div>
      </main>

      <PageFooter />
    </>
  )
}
