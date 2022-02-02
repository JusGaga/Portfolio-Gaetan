import React from 'react';

import '../styles/ComponentsStyles/NavBar.css'

import github from "../Img/github.svg"
import linkedin from "../Img/linkedin.svg"
import MenuBurger from "../Img/MenuBurger.svg"
import Logo from "../Img/Logo.png"

const NavBar = () => {
    return (
        <>
         <nav className="container">
             <div className="left">
                 <img src={Logo} className={"logo"} alt="Logo Gaetan Juston" />
             </div>
             <div className="right">
                 <a className="spacing" href="https://www.linkedin.com/in/gaetan-juston-6412b41a9/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Logo linkedin"/></a>
                 <a className="spacing" href="https://github.com/JusGaga" target="_blank" rel="noreferrer"><img src={github} alt="Logo github"/></a>
                 <a className="spacing" href="#" style={{display:"none"}}><img src={MenuBurger} alt="Menu"/></a>
             </div>
         </nav>
        </>
    );
};

export default NavBar;
