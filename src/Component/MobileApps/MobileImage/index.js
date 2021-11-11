import './index.css';
import banner from '../../../Images/landing-1.png';

const MobileImage =()=>{
    return (
        <div className ="mobileimage-box">
             <img src={banner} alt="platform-image" className="platform-image" />
            
        </div>
    )
}

export default MobileImage;