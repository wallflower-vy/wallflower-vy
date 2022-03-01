import BannerComponent from "../Component/BannerComponent"
import BlueBox from "../Component/BlueBox"
import ContactComponent from "../Component/ContactComponent"
import DesktopAPP from "../Component/DesktopAPP"
import Footer from "../Component/Footer"
import HowItWorks from "../Component/HowItWorks"
import IconComponent from "../Component/IconComponent"
import MobileApps from "../Component/MobileApps"
import NavComponent from "../Component/NavComponent"
import PackagePlan from "../Component/PackagePlan"
import ProgramingPlan from "../Component/ProgramingPlan"
import Technologies from "../Component/Technologies"
import WebApps from "../Component/WebApps"


const Home = () => {
    return (
        <>
            <NavComponent />
            <BannerComponent />
            <ProgramingPlan />
            <PackagePlan />
            <MobileApps />
            <WebApps />
            <DesktopAPP />
            <Technologies />
            <IconComponent />
            <HowItWorks />
            <BlueBox />
            <ContactComponent />
            <Footer />
           
        </>
    )
}
export default Home;