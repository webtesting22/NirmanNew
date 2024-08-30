import React from "react";
import bgImage from "/images/ad7cv-ji6zqdfsaf.jpg";
import "./AllProjects.css";
import ProjectImage from "/images/demoimage.jpg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Correct modules import
import "swiper/css";
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles


const CardComponent = (props) => {
    return (
        <>
            <div className="cardComponent">
                <div className="projectImageContainer">
                    <img src={props.image} />
                </div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>Read More</button>
            </div>
        </>
    )
}
const AllProjects = () => {
    const projectsData = [
        {
            image: ProjectImage,
            title: "Nirman LifeStyle",
            description: "Residential",
        },
        {
            image: ProjectImage,
            title: "Nirman LifeStyle",
            description: "Residential",
        },
        {
            image: ProjectImage,
            title: "Nirman LifeStyle",
            description: "Residential",
        },
    ]
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
                <h1 className="pageHeading">NIRMAN PROJECTS</h1>
            </div>
            <div style={{ backgroundColor: "#151515" }} className="projectPageContainer">
                <h1 className="sectionHeading">Residential <span>Projects</span></h1>
                <hr className="underline" />
                <div>
                    <button className="projectButton">All Projects</button>
                    <button className="projectButton">Ongoing</button>
                    <button className="projectButton">Completed</button>
                </div>
                <Swiper
                    // slidesPerView={3}
                    // spaceBetween={30}
                    width={500}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                >
                    {projectsData.map((item, index) => (
                        <SwiperSlide key={index}
                        >
                            <CardComponent image={item.image} title={item.title} description={item.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h1 className="sectionHeading">Commercial <span>Projects</span></h1>
                <hr className="underline" />
                <div>
                    <button className="projectButton">All Projects</button>
                    <button className="projectButton">Ongoing</button>
                    <button className="projectButton">Completed</button>
                </div>
            </div>
        </>
    )
}
export default AllProjects;