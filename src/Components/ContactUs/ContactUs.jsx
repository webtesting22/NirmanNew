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
        </>
    )
}
export default ContactUs;