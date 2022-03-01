import './index.css';
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";




const BannerComponent = () => {
    return (
        <div className="banner-box ">
            <div className='wrap'>
                <LeftBanner />
                <RightBanner />
            </div>



        </div>
    )
}
export default BannerComponent;