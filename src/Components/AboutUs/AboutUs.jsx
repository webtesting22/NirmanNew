import React from "react";
import bgImage from "/images/ad7cv-ji6zqdfsaf.jpg";
import { Col } from "antd";
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <h1 className="pageHeading">ABOUT US</h1>
            </div>
            <div className="aboutContainer">
                <img src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" />
                <div className="aboutParagraph">
                    <p>Over the years we at NIRMAN parivaar have built a reputation
                        as
                        innovators in real estate
                        market, and today are ranked as one of the most trusted admired and acclaimed
                        builders in
                        the building and construction industry. For a company with such wide spread
                        recognition, we
                        had very humble and modest beginnings more than three decades ago. Our father and
                        torchbearer Shri J. C. Shah was firm in his principles; to give our valued customers
                        only
                        the best. With millions of people happily inhabiting our buildings and present, we
                        can
                        modestly claim that we have surpassed benchmarks sent by him. Carrying forward the
                        legacy on
                        Nirman Parivar are Prashant Shah & Chetan Shah. Both are Civil Engineers with years
                        successful practice. We at Nirman have, in-house architect & liasoning 9th Street
                        architect
                        and structural consultant Structura-Design Consultants. Today Nirman parivar is
                        proud to
                        state, we have successfully accomplished over 24 prestigious projects which resides
                        more
                        than 1500 families.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="stats">24<hr /> Prestigious Projects</div>
                        <div className="stats">1500 <hr />Happy Families</div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="sectionHeading">Our<span> Teams</span></h1>
                <hr className="underline" />
                <div className="cardsContainer">
                    <Col lg={6}>
                        <div className="card main">
                            <div><i class='bx bxs-user-circle' style={{ color: "#ffffff" }}  ></i></div>
                            <h2>Prashant Shah</h2><h5>Founder & Director</h5>
                            <p>He established the firm “Nirman” in 1981 and since than have executed more than 30 projects under the name Nirman in and around Ahmedabad. Having a experience of more than 35 years as a civil engineer he has successfully executed many residential, commercial and institutional projects in Gujarat. He has a great expertise in planning and liasoning and has executed projects of leading developers of Gujarat under the firm name 9th street architect He is the chairman of The Progressive Mercantile Cooperative bank, ex-president of a very prestigious organisation of civil engineers, GICEA and director of karnavati club.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card main">
                            <div><i class='bx bxs-user-circle' style={{ color: "#ffffff" }}  ></i></div>
                            <h2>Chetan Shah</h2><h5>Co founder & Director</h5>
                            <p>He is the part of “ Nirman” group since 1987 and have successfully completed more than 25 projects under the name Nirman in and around Ahmedabad. Having a experience of more than 29 years as a civil engineer, he has executed many residential and commercial projects in Gujarat. He is a fellow member of GICEA and Institute of Civil Enginners. His involvement in the company is right form grass root level to handling public relations.</p>
                        </div>
                    </Col>
                </div>
                <div className="cardsContainer">
                    <Col lg={3} md={6}>
                        <div className="card team">
                            <h2>Saurabh Verma</h2><h5>Principal Architect</h5>
                            <p>He is a founder and director of firm 9th Street architect in the year 2002 and since then he has designed several residential, commercial and institutional projects in Gujarat. 9th street architect has designed residential and commercial projects of almost all the leading developers of Gujarat.We have a staff of more than 25 architects working together for the best possible design.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="card team">
                            <h2>Saumya Shah</h2><h5>Structural Designer</h5>
                            <p>
                                He did masters in structural designing from CEPT university and has been part of Nirman Group since 2014. He started designing firm “STRUCTURA”- Design Consultants in the year 2016 and have successfully designed many residential and commercial projects. He has been part of many redevelopment projects</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="card team">
                            <h2>Geet Shah</h2><h5>Principal Valuer</h5>
                            <p>
                                He is a civil engineer and did his masters in valuation in the year 2016. He joined Nirman group in 2015 and has a been part of on site construction since then.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="card team">
                            <h2>Ankit Adhvaryu</h2><h5>Charted Accountant</h5>
                            <p>Nirman Group has a in-house qualified charted accountant, who is involved in planning financial matters of the firm.</p>
                        </div>
                    </Col>
                </div>
            </div>
        </>
    )
}
export default AboutUs;