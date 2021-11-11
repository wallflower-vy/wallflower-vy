import './index.css';
import banner from '../../../Images/landing-2.png';

const WebImage = () => {
    return (
        <div className="webimage-box">
             <img src={banner} alt="webimage" className="webimage" />
        </div>
    )
}
export default WebImage;