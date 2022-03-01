import './index.css';
import banner from '../../Images/logo.png';
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import Page from '../MobileNav';
import MobileNav from '../MobileNav';

const Nav = ({switchMenuState}) =>{
    return(
        <div className="nav-box">
            <div className="logo-box">
                <a href="index.js"><img src={banner} alt="logo" className="logo" /></a>
                <li><a href="index.js" className="nav-links">Home</a></li>
                <li><a href="index.js" className="nav-links">Plan</a></li>
                <li><a href="index.js" className="nav-links">Siwes or IT students</a></li>
                <div className="menu" >
                    <FiMenu onClick={switchMenuState} />
                </div>
            </div>

            <div className="nav-icons-box">
                <IconContext.Provider value={{ className: "facebook" }}>
                    <div>
                        <a href="index.js"><FaFacebookSquare /></a>
                        <a href="index.js"><FaInstagram /></a>
                        <a href=""><FaTwitterSquare /></a>
                        <a href=""><FaGithub /></a>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

const NavComponent = () => {

    const [menuState, setMenuState] = useState(true);

    const switchMenuState = () =>{
        setMenuState(!menuState)
    }

    const switchmenue= () => {
        if(menuState === true){
            return <Nav switchMenuState={switchMenuState} />
        }else{
            return <MobileNav switchMenuState={switchMenuState} />
        }
    }

    return (
       <>
       {menuState ? <Nav switchMenuState={switchMenuState}  /> :<MobileNav switchMenuState={switchMenuState} />}
       {/* { switchmenue()} */}
       
        </>
    )
}
export default NavComponent;