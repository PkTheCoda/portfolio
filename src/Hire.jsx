import HireHeader from "./HireComponents/HireHeader"
import HireFirst from "./HireComponents/HireFirst"
import HireTimeline from "./HireComponents/HireTimeline"
import HireFeatures from "./HireComponents/HireFeatures"
import HireFinalCTA from "./HireComponents/HireFinalCTA"
import ContactSection from "./Components/ContactSection"
import WavyLine from "./Components/WavyLine"


export default function Hire() {
    return (
        <>
            <HireHeader />
            <HireFirst />
            <HireTimeline />
            <HireFeatures />
            <HireFinalCTA />
            <WavyLine />
            <ContactSection />
        </>
    )
}