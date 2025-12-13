import PageContainer from "@/layout/PageContainer"
import VisualShowcase from "./VisualShowcase"

const FeaturedWorkSection = () => {
  return (
    <section className="flex items-center justify-center py-20 lg:py-38 w-full bg">
        <PageContainer className="flex w-full justify-between items-center">
            <h2 className="text-6xl font-normal bg-text-gradient bg-clip-text text-transparent max-w-lg">We turn ideas into websites that push your business ahead.</h2>
            <VisualShowcase/>
        </PageContainer>
    </section>
  )
}

export default FeaturedWorkSection