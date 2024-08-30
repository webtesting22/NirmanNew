import React, { useState } from "react";
import "./Navbar.css";
import Logo from "/images/NirmaanLogo.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };
    return (
        <>
            <div className="navbar">
                <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>
                    <ul>
                        <li onClick={toggleNav}><Link to="/">Home</Link></li>
                        <li onClick={toggleNav}><Link to="/AboutUs">About Us</Link></li>
                        <li onClick={toggleNav}><Link to="/AllProjects">All Projects</Link></li>
                        <li onClick={toggleNav}><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navImageContainer"> <Link to="/"><img src={Logo} /></Link></div>
                <button className="nav-toggler" onClick={toggleNav} >
                    {isNavVisible ? <RxCross2 /> : <MdMenu />}
                </button>
            </div>
        </>
    )
}
export default Navbar;