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
            title: "Nirman Twins Bungalows",
            description: "Residential",
        },
        {
            image: ProjectImage,
            title: "Ivory Orchards",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Ivory Springs",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Nirman Flats",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Nirman Complex",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Nirman Tower",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Nirman Tenaments",
            description: "Residential",
        },
        {
            image: ProjectImage,
            title: "Nirman Heights",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Nirman Row House",
            description: "Residential,Commercial",
        },
        {
            image: ProjectImage,
            title: "Nirman House",
            description: "Residential,Commercial",
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