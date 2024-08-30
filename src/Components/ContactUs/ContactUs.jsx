import React from "react";
import bgImage from "/images/ad7cv-ji6zqdfsaf.jpg";
const ContactUs = () => {
    return(
        <>
          <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize:"cover",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <h1 className="pageHeading">CONTACT US</h1>
            </div>
            <h1 className="sectionHeading">Book Your <span>Dream House</span></h1>
            <hr className="underline"/>
            <img src="/images/nirman-home-banner1.jpg" style={{width:"100%",objectFit:"contain",height:"500px"}}/>
        </>
    )
}
export default ContactUs;