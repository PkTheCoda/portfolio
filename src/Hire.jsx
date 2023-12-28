import HireHeader from "./HireComponents/HireHeader"
import HireFirst from "./HireComponents/HireFirst"
import HireTimeline from "./HireComponents/HireTimeline"


export default function Hire() {
    return (
        <>
            <HireHeader />
            <HireFirst />
            <HireTimeline />
            <div className="bg-red-100">hi</div>
        </>
    )
}