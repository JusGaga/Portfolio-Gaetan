import React from 'react';
import Scroll from "../../../components/Scroll";

import "../../../styles/pages/StarterPages/AboutMe.css"
import UnderTitle from "../../../Img/UnderTitle.svg";
import {Link} from "react-router-dom";
import AboutMeImg from "../../../Img/AboutMeImg.png";


const AboutMe = (props) => {
    return (
        <>
            <div className={"middlePageHome3"} style={{top: props.activate === 1 ? "0vh" : "200vh"}}>
                <div style={{display: props.activate === 1 ? "none" : "block"}}><Scroll page={3} /></div>
                <div className={"ContainerAboutMe "}>
                    <div className="Present2">
                        <h1>About Me</h1>
                        <img className="underTitle" src={UnderTitle} alt={"underTitle"}></img>
                        <h2>I love travelling,<br/>
                            discovering and creating</h2>
                        <div style={{display: props.activate === 1 ? "none" : "block"}}><Link to="AboutMe" onClick={window.scrollTo(0, 0)}>Who I am ? </Link></div>
                    </div>

                </div>
                <img className={"AboutMeImg "} src={AboutMeImg} alt=" Project"/>
                
            </div>
            <div className={"line3"} style={{display:props.activate === 1 ? "none" : "block"}}></div>
        </>
    );
};

export default AboutMe;
