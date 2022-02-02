import React from 'react';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const AllHome = () => {
    return (
        <>
            <Home/>
            <Projects/>
            <AboutMe/>
            <Contact />
            <Footer/>
        </>
    );
};

export default AllHome;
