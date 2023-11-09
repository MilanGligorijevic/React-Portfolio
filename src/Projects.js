import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
import Socials from "./Socials";

function Projects(){
    const [data, setData] = React.useState([]);

    function addCardData(){
        const dataArray = projectData.data.memes;
        dataArray.map(item => 
            setData(prevState => [...prevState, item])
        )
    }

    React.useEffect(() => {
        addCardData();
    }, []);

    

    return(
        <div className="main-projects">
            <Navbar />
            <div className="projects">
                <h1>Projects portfolio</h1> 
                <div className="projects-div">
                    {data.map(item => 
                    {
                    return <ProjectCard name={item.name} url={item.url} img={item.img} about={item.about}/>
                    }   
                    )}
                </div>
            </div>
            <div className="contact-socials">
                <Socials />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;