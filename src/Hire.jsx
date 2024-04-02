import HireHeader from "./HireComponents/HireHeader"
import HireFirst from "./HireComponents/HireFirst"
import HireTimeline from "./HireComponents/HireTimeline"
import HireFeatures from "./HireComponents/HireFeatures"
import HireNavbar from "./HireComponents/HireNavbar"
import HireBottomFeatures from "./HireComponents/HireBottomFeatures"
import ContactSection from "./Components/ContactSection"
import WavyLine from "./Components/WavyLine"


export default function Hire() {
    return (
        <>
            <HireNavbar />
            <HireHeader />
            <HireFirst />
            <HireTimeline />
            <HireFeatures />
            <HireBottomFeatures />
            <WavyLine />
            <ContactSection />
        </>
    )
}