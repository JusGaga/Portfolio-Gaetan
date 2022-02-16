import React from 'react';

import "../../../styles/pages/StarterPages/Projects.css"

import planet2 from "../../../Img/planet2.svg"
import planet3 from "../../../Img/planet3.svg"
import ProjectImg from "../../../Img/ProjectImg.png"
import UnderTitle from "../../../Img/UnderTitle.svg"

import Scroll from "../../../components/Scroll";
import {Link} from "react-router-dom";


const Projects = () => {
    return (
        <>
            <div className={"planet2"}>
                <img src={planet2} alt="planet2"/>
            </div>
            <div className={"middlePageHome2 "}>
                <Scroll page={2}/>
                <div className="containerProject">
                  <div className="Present">
                      <h1>Project</h1>
                      <img className="underTitle" src={UnderTitle} alt={"underTitle"}></img>
                      <h2>Explore my different projects,<br/>
                          I'll explain how did it.</h2>
                      <div><Link to="#">Explore More</Link></div>
                  </div>
                </div>
                  <img className={"ProjectImg "} src={ProjectImg} alt=" Project" />
            </div>
            <div className={"planet3"}>
                <img src={planet3} alt="planet3"/>
            </div>
            <div className={"line2"}></div>
        </>
    );
};

export default Projects;
