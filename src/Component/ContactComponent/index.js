import './index.css';
import { BiPhoneCall } from "react-icons/bi"
import { IoIosCall } from "react-icons/io"
import { HiMailOpen } from "react-icons/hi"

const ContactComponent =()=>{
    return(
        <div className="contact">
            <div className ="contact-box">
                <h3 className="contact-heading">You have any question?</h3>
                <span className ="contact-address">No.15, Police Road, GRA Ilorin Kwara State | 08164517303 | 07012064022</span>
                <div className="social-media">
                    <a href ="" className ="social-link social-green"><BiPhoneCall />chat</a>
                    <a href ="" className ="social-link"><IoIosCall  />Call</a>
                    <a href ="" className ="social-link social-red"><HiMailOpen />Email</a>
                </div>
                
            </div>

        </div>
    )
}
export default ContactComponent;