import React, { useState } from "react";
import bgImage from "/images/ad7cv-ji6zqdfsaf.jpg";
import "./AllProjects.css";
import ProjectImage from "/images/demoimage.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'


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
    const [activeResidentialTab, setActiveResidentialTab] = useState('all');
    const [activeCommercialTab, setActiveCommercialTab] = useState('all');
    const projectsData = [
        {
            image: ProjectImage,
            title: "Nirman LifeStyle",
            description: "Residential",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Twins Bungalows",
            description: "Residential",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Ivory Orchards",
            description: "Residential,Commercial",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Ivory Springs",
            description: "Residential,Commercial",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Flats",
            description: "Residential,Ongoing",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Complex",
            description: "Residential,Completed",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Tower",
            description: "Residential,Commercial",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Tenaments",
            description: "Residential",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Heights",
            description: "Residential,Commercial",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman Row House",
            description: "Ongoing,Commercial",
            descriptionProject: "Some description for project",
        },
        {
            image: ProjectImage,
            title: "Nirman House",
            description: "Completed,Commercial",
            descriptionProject: "Some description for project",
        },
    ]
    const residentialAllProjects = projectsData.filter(item => item.description.includes('Residential'));
    const residentialOngoingProjects = residentialAllProjects.filter(item => item.description.includes('Ongoing'));
    const residentialCompletedProjects = residentialAllProjects.filter(item => item.description.includes('Completed'));

    const commercialAllProjects = projectsData.filter(item => item.description.includes('Commercial'));
    const commercialOngoingProjects = commercialAllProjects.filter(item => item.description.includes('Ongoing'));
    const commercialCompletedProjects = commercialAllProjects.filter(item => item.description.includes('Completed'));
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
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button className={`projectButton ${activeResidentialTab === 'all' ? 'active' : ''}`} onClick={() => setActiveResidentialTab('all')}>All Projects</button>
                    <button className={`projectButton ${activeResidentialTab === 'ongoing' ? 'active' : ''}`} onClick={() => setActiveResidentialTab('ongoing')}>Ongoing</button>
                    <button className={`projectButton ${activeResidentialTab === 'completed' ? 'active' : ''}`} onClick={() => setActiveResidentialTab('completed')}>Completed</button>
                </div>
                {activeResidentialTab === 'all' && (
                    <Swiper slidesPerView={3} spaceBetween={30}  centeredSlides={true}  navigation={true} modules={[Navigation]} className="mySwiper">
                        {residentialAllProjects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent image={item.image} title={item.title} description={item.descriptionProject} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {activeResidentialTab === 'ongoing' && (
                    <Swiper slidesPerView={3} spaceBetween={30}  centeredSlides={true}  navigation={true} modules={[Navigation]} className="mySwiper">
                        {residentialOngoingProjects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent image={item.image} title={item.title} description={item.descriptionProject} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {activeResidentialTab === 'completed' && (
                    <Swiper slidesPerView={3} spaceBetween={30}  centeredSlides={true}  navigation={true} modules={[Navigation]} className="mySwiper">
                        {residentialCompletedProjects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent image={item.image} title={item.title} description={item.descriptionProject} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Commercial Projects */}
                <h1 className="sectionHeading">Commercial <span>Projects</span></h1>
                <hr className="underline" />
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button className="projectButton" onClick={() => setActiveCommercialTab('all')}>All Projects</button>
                    <button className="projectButton" onClick={() => setActiveCommercialTab('ongoing')}>Ongoing</button>
                    <button className="projectButton" onClick={() => setActiveCommercialTab('completed')}>Completed</button>
                </div>

                {activeCommercialTab === 'all' && (
                    <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                        {commercialAllProjects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent image={item.image} title={item.title} description={item.descriptionProject} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {activeCommercialTab === 'ongoing' && (
                    <Swiper slidesPerView={3} spaceBetween={30}  centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                        {commercialOngoingProjects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent image={item.image} title={item.title} description={item.descriptionProject} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {activeCommercialTab === 'completed' && (
                    <Swiper slidesPerView={3} spaceBetween={30}  centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                        {commercialCompletedProjects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent image={item.image} title={item.title} description={item.descriptionProject} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Custom Navigation Buttons */}

            </div>
            {/* <Swiper
                    slidesPerView={3}
                    
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper "
                >
                    {projectsData.map((item, index) => (

                        <SwiperSlide key={index}>
                            <CardComponent image={item.image} title={item.title} description={item.description} />
                        </SwiperSlide>

                    ))}
                </Swiper>
                <button className="swiper-button-prev">Prev</button>
                <button className="swiper-button-next">Next</button>
                <h1 className="sectionHeading">Commercial <span>Projects</span></h1>
                <hr className="underline" />
                <div>
                    <button className="projectButton">All Projects</button>
                    <button className="projectButton">Ongoing</button>
                    <button className="projectButton">Completed</button>
                </div> */}


        </>
    )
}
export default AllProjects;