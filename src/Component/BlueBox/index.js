import './index.css';
import { BsBellFill } from "react-icons/bs"
import { SiCss3 } from "react-icons/si"
import { AiTwotoneLike } from "react-icons/ai"
// import { FaReact } from "react-icons/fa"

const BlueBox = () => {
    return (
        <div className="blue-box">
            <div className="blue-boxes">
                <div className="font-icon"><BsBellFill className="blue-icon" /></div>
                <p className="blue-text">step 01</p>
                <div className="step-one">
                    <h6 className="blue-sign">Sign up</h6>
                    <span className="blue-content">Go to the <a href="#" className="red">sign up</a> page and fill your registration details appropriately.
                        Ensure your email address and phone number are correct!</span>

                    <div className="platform">
                        <div className="platform-cardtwo ">WEB</div>
                        <div className="platform-cardtwo">MOBILE</div>
                        <div className="platform-cardtwo">DESKTOp</div>
                    </div>
                </div>
                <div className="font-icon2"><SiCss3 className="red-icon " /></div>
                <p className="blue-text">step 02</p>
                <div className="step-one">
                    <h6 className="blue-sign">Response</h6>
                    <span className="blue-content">After your application is received and processed,
                     we will contact you for interview. The details of the interview will be emailed to your inbox</span>

                    <div className="platform">
                        <div className="platform-cardthree">WEB</div>
                        <div className="platform-cardthree">MOBILE</div>
                        <div className="platform-cardthree">DESKTOP</div>
                    </div>
                </div>
                <div className="font-icon3"><AiTwotoneLike className="green-icon " /></div>
                <p className="blue-text">step 03</p>
                <div className="step-one">
                    <h6 className="blue-sign">Payment</h6>
                    <span className="blue-content">After interview, you will be provided payment 
                    details and you are expected to pay before the commencement of the training. And thats it!!!</span>

                    <div className="platform">
                        <div className="platform-cardtwo">WEB</div>
                        <div className="platform-cardtwo">MOBILE</div>
                        <div className="platform-cardtwo">DESKTOP</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BlueBox;