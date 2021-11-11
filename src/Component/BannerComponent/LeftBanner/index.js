import './index.css';
import {FaUserCircle} from "react-icons/fa";
import {FiKey} from "react-icons/fi";

const LeftBanner = () => {
    return (
        <div className="left-banner-box">
            
            <h1 className ="heading">HowIt'sDoneInReality</h1>
            <p className ="sub-heading">We teach the art of programming to your heart</p>
            <p className ="textone">Become a fullstack software engr. that writes fast and smart algorithm to solve real life problem using modern technologies.</p>
        <button className ="signup-btn"><FaUserCircle /> sign up</button>
        <button className ="learn-btn">< FiKey/>Learn more</button>
                
            
        </div>
    )
}
export default LeftBanner;