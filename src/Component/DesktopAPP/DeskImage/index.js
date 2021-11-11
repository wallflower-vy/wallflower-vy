import './index.css';
import banner from '../../../Images/landing-3.png';

const DeskImage =()=>{
    return(
        <div className ="deskimage">
            <img src={banner} alt="platform-image" className="platform-image" />
        </div>
    )
}
export default DeskImage;