import './index.css';
import banner from '../../Images/logo.png';
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
// import NavComponent from '../NavComponent';
// import { IconContext } from "react-icons"

const MobileNav = ({switchMenuState}) => {
    return (
        <div className="mobile-page-box">
            <div className="mobile-logo-box">
                <div className="mobile-logoo">
                    <img src={banner} alt="logo" className="page-logo" />
                </div>

                <div className="close-icon-box">
                    <IconContext.Provider value={{ style: { fontSize: '30px', color: "white", justifyContent: "space-between", marginTop:"-25px" } }}>
                        <AiOutlineClose onClick={switchMenuState}  />
                    </IconContext.Provider>
                </div>
            </div>
            <hr />
            <div className="mobile-nav-box">
                <li><a href="index.js" className="page-links">Home</a></li>
                <li><a href="index.js" className="page-links">Plan</a></li>
                <li><a href="index.js" className="page-links">Siwes or IT students</a></li>
            </div>
            <hr />

            <div className="page-icon-box">
                <div className="Page-icons">
                        <a href="index.js" className="facebookk"><span><FaFacebookSquare/></span> <span className="page-list">Facebook</span></a>
                        <a href="index.js" className="facebookk"><span><FaInstagram/></span> <span className="page-list">Instagram</span></a>
                        <a href="index.js" className="facebookk"><span><FaTwitterSquare /></span> <span className="page-list">Twitter </span></a>
                        <a href="index.js" className="facebookk"><span><FaGithub/></span> <span className="page-list">Github</span></a>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;