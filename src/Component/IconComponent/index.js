import './index.css';
import { FaJava } from "react-icons/fa"
import { IoIosAppstore } from "react-icons/io"
import { SiPython } from "react-icons/si"
import { FaPhp } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { AiFillWindows } from "react-icons/ai"
import { SiCss3 } from "react-icons/si"
import { IoLogoAndroid } from "react-icons/io"
import { FaGithubSquare } from "react-icons/fa"
import { useState } from 'react';
import reactDom from 'react-dom';
// import { IoIosAppstore } from "react-icons/io";


const IconComponent = () => {
    const [hoverState, setHoverState] = useState("image-overlay-hide");

    const switchClass = (className) =>{
        setHoverState(className)
    }

    return (
        <div className="real-icons cf">
             <div className={hoverState}>
                <p class="image-det" >learn more about the technologies we support</p>
            </div>
            <a href="index.js" className="icon-link"
             onMouseOver={switchClass.bind(this, "image-overlay-show")} 
             onMouseOut={switchClass.bind(this, "image-overlay-hide")} >
                <div className="icon-box">
                   
                    <div className="icon-box2">
                        <div>
                            <div className="container-one"><FaReact className="icon-one" /></div>
                        </div>
                        <div>
                            <div className="container-one"><FaReact className="icon-one" /></div>
                        </div>
                    </div>
                    <div className="icon-box3">
                        <div>
                            <div className="container-two "><AiFillWindows className="icon-two" /></div>
                        </div>
                        <div>
                            <div className="container-two"><SiCss3 className="icon-two" /></div>
                        </div>

                    </div>
                    <div className="icon-box1">
                        <div>
                            <div className="container-one"><IoIosAppstore className="icon-one" /></div>
                        </div>
                        <div>
                            <div className="container-two"><FaJava className="icon-two" /></div>
                        </div>
                        <div>
                            <div className="container-one"><SiPython className="icon-three" /></div>
                        </div>
                        <div>
                            <div className="container-two"><FaPhp className="icon-two" /></div>
                        </div>

                        <div>
                            <div className="container-one"><IoIosAppstore className="icon-one" /></div>
                        </div>
                    </div>
                    <div className="icon-box4">
                        <div>
                            <div className="container-two "><IoLogoAndroid className="icon-two" /></div>
                        </div>
                        <div>
                            <div className="container-two"><SiCss3 className="icon-two" /></div>
                        </div>
                    </div>
                    <div className="icon-box2">
                        <div>
                            <div className="container-one"><FaGithubSquare className="icon-one" /></div>
                        </div>
                        <div>
                            <div className="container-one"><FaGithubSquare className="icon-one" /></div>
                        </div>

                    </div>
                </div>

            </a>

        </div>




    )
}

export default IconComponent;