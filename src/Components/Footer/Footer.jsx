import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                
                <Link to="/"><img src="/images/NirmaanLogo.png"/></Link>
                <div className="footerLinksContainer">
                    <Link to="/">Home</Link>
                    <Link to="/AboutUs">About Us</Link>
                    <Link to="/AllProjects">All Projects</Link>
                    <Link to="/ContactUs">Contact Us</Link>
                </div>
                <div className="socialLinksContainer">
                    <i class='bx bxl-instagram'></i>
                    <i class='bx bxl-meta'></i>
                    <i class='bx bxl-linkedin-square'></i>

                </div>
                <p>Copyright © All rights reserved by <a href="https://www.Outleadsolutions.com" target="_blank">Outlead Solutions</a></p>
            </div>
        </>
    )
}
export default Footer;