import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css"
import bgImage from "/images/nirman-home-banner1.jpg"
import "./HomePage.css"
const HomePageComponent = ({ image, title, description }) => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    top: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    
                }}
            >
                <h1 style={{
                    padding:"20px 0"
                }}>{title}</h1>
                <p style={{
                    borderRadius: "10px",
                    backgroundColor: "#202020",
                    width: "500px",
                    // height: "30px",
                    fontSize: "1.2rem",
                    // padding:"10px",
                    padding:"10px",
                    marginBottom:"10px"
                }}>{description}</p>

            </div>

        </>
    )
}
const ProjectComponent = ({ serialNumber, image1, title }) => {
    return (
        <>
            <div className="projectComponentContainer">
            <div style={{display:"flex",flexDirection:"column"}}>
                <p>{serialNumber}</p><br/>
                <h1>{title}</h1>
                </div>
                <div className="imageContainer">
                    <img src={image1} alt={title} />
                   </div>

                
            </div>
        </>
    )
}
const HomePage = () => {

    const content = [
        {
            imagePath: "/images/nirman-home-banner1.jpg",
            title: '"Mastering the Craft: Expert Insights into Construction Excellence"',
            description: "Unveiling the Blueprint of Mastery – Where Knowledge Meets Concrete, and Excellence is the Foundation of Every Structure We Create",
        },
        {
            imagePath: "/images/nirman-home-banner2.jpg",
            title: '"Elevate Your Vision with Expert Construction: Where Quality Meets Innovation"',
            description: " Transforming Blueprints into Masterpieces, We Build with Integrity, Skill, and a Commitment to Your Tomorrow – Your Dream, Our Craft, Unleashing Possibilities Brick by Brick.",
        },
        {
            imagePath: "/images/nirman-home-banner3.jpg",
            title: '"Redefining Construction Excellence: Your Journey to Inspired Living Starts Here"',
            description: "From Groundbreaking to Grandeur, Every Structure Tells a Story – Ours is Written in Steel, Cemented in Quality, and Built on Your Aspirations for a Timeless Legacy",
        },
        {
            imagePath: "/images/nirman-home-banner4.jpg",
            title: '"Crafting Tomorrow\'s Landscapes Today: Pioneering Construction Solutions for Your Vision"',
            description: " Innovate, Build, Thrive – Unleashing the Power of Precision in Construction, We Shape Spaces Where Dreams Flourish and Futures Bloom, One Project at a Time",
        }
    ]
    const projectContent = [
        {
            serialNumber: "01",
            bgImagePath: "/images/nirman-habitat.jpeg",
            title: "Nirman Rejoice",
        },
        {
            serialNumber: "02",
            bgImagePath: "/images/nirman-greens.jpeg",
            title: "Nirman Greens",
        },
        {
            serialNumber: "03",
            bgImagePath: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Ivory Springs",
        },
        {
            serialNumber: "04",
            bgImagePath: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Ivory Orchards",
        },
    ]
    return (
        <>

            <Swiper>
                {content.map((item, index) => (
                    <SwiperSlide key={index}>
                        <HomePageComponent
                            image={item.imagePath}
                            title={item.title}
                            description={item.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <h1 className="sectionHeading">Foundations <span>Of Excellence</span></h1>
                <hr className="underline" />
                <div className="bannerContainer">
                    <div className="banner first">
                        <h1>QUALITY</h1>
                        <p>Our commitment to quality is unwavering. We strive for excellence in every detail,
                            ensuring that each project meets the highest standards of craftsmanship. From
                            materials
                            to construction processes, our dedication to quality is the cornerstone of our work.
                        </p>
                    </div>
                    <div className="banner second">
                        <h1>SUSTAINABILITY</h1>
                        <p>Embracing a sustainable approach, we integrate eco-friendly practices into every
                            project.
                            Our focus extends beyond the present, aiming to create spaces that harmonize with
                            the
                            environment and contribute to a sustainable future. We believe in building
                            responsibly,
                            leaving a positive impact on both the community and the planet.
                        </p>
                    </div>
                    <div className="banner third">
                        <h1>DESIGN</h1>
                        <p>At the heart of our projects lies a passion for innovative design. We believe in the
                            power of thoughtful and purposeful design to elevate living spaces. Collaborating
                            closely with our clients, we bring visions to life, creating homes and structures
                            that
                            are not only aesthetically pleasing but also functional and tailored to individual
                            needs.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{}} className="projectSlides">
                <h1 className="sectionHeading">Our <span>Projects</span></h1>
                <hr className="underline" />
                <div>
                    <Swiper>
                        {projectContent.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ProjectComponent
                                    serialNumber={item.serialNumber}
                                    image1={item.bgImagePath}
                                    title={item.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default HomePage;