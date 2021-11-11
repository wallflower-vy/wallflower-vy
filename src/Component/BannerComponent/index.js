import './index.css';
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";




const  BannerComponent =()=>{
    return(
        <div className="banner-box">
        <LeftBanner/>
        <RightBanner />
            

    
    </div>
    )
}
export default BannerComponent;