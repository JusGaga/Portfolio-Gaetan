import React from 'react';
import Scroll from "../../components/Scroll";

import "../../styles/pages/AboutMe.css"
import UnderTitle from "../../Img/UnderTitle.svg";
import {Link} from "react-router-dom";
import AboutMeImg from "../../Img/AboutMeImg.png";

const AboutMe = () => {
    return (
        <>
            <div className={"middlePageHome3"}>
                <Scroll />
                <div className={"ContainerAboutMe"}>
                    <div className="Present2">
                        <h1>About Me</h1>
                        <img className="underTitle" src={UnderTitle}></img>
                        <h2>I love travelling,<br/> discovering and creating</h2>
                        <div><Link to="#">Who I am ? </Link></div>
                    </div>

                <div className={"imgAboutMe"}>
                    <img className={"AboutMeImg"} src={AboutMeImg} alt="Image Project"/>
                </div>
                </div>
            </div>
            <div className={"line3"}></div>
        </>
    );
};

export default AboutMe;
