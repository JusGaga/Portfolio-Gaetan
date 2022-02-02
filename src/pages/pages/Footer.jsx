import React from 'react';

import "../../styles/pages/Footer.css"

import footer from "../../Img/Footer.svg"

const Footer = () => {
    return (
        <>
            <div className={"ContainerFooter"}>
                <div className={"ContainerFooter2"}>
                    <div className={"leftFooter"}>
                        <h1>This website is inspired by the Kyon Yagi website : https://www.kuon.space <br/>
                            The images were made by Seda : https://www.figma.com/@seda</h1>
                    </div>
                    <div className={"RightFooter"}>
                        <h1 style={{fontSize:'24px',marginBottom:"15px",marginLeft:"5px",color:"var(--white)"}}>Contact Form</h1>
                        <form action="" id={"FormContact"}>
                            <label htmlFor="Name">Your Name :</label>
                            <input type="text" name={"Name"} id={"Name"} placeholder={"Name..."}/>
                            <label htmlFor="Email">Your Email :</label>
                            <input type="email" name={"Email"} id={"Email"} placeholder={"Email@email.com..."}/>
                            <label htmlFor="Messsage">Your message:</label>
                            <textarea name={"Message"} id={"Message"} cols={90} rows={15} placeholder={"Your message..."}></textarea>
                            <div className={"btnFooter"}>
                            <button>Send</button>
                            </div>

                        </form>
                    </div>
                </div>
                <div className={"footer"}>
                    <img src={footer} alt="Footer"/>
                </div>
            </div>
            <div className={"copy"}>
                Made by JusGaga © 2022
            </div>
        </>
    );
};

export default Footer;
