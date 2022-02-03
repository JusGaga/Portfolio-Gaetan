import React from 'react';

import "../../styles/pages/Home.css"

import NavBar from "../../components/NavBar";
import Scroll from "../../components/Scroll";

import planet from "../../Img/Planet.svg"



const Home = () => {
    return (
        <>
            <NavBar />
            <div className={"middlePage "}>
                <Scroll />
                <div className={"circle "}>
                    <h3 className={'center one'}>Juston Gaetan</h3>
                    <p className={"center two"}>Web developer</p>
                </div>
                    <div className={"planet"}>
                        <img src={planet} alt="Planet"/>
                    </div>
            </div>
            <div className={"bottom"}>
                <div className={"scrollDown"}>
                    Scroll Down
                </div>
                <div className="line"></div>
            </div>
        </>
    );
};

export default Home;
