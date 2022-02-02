import React from 'react';

import "../../styles/pages/Footer.css"

import footer from "../../Img/Footer.svg"

const Footer = () => {
    return (
        <>
            <div className={"ContainerFooter"}>
                <div className={"ContainerFooter2"}>
                    <div className={"leftFooter"}>

                    </div>
                    <div className={"RightFooter"}>
                        <form action="#" id={"FormContact"}>
                            <label htmlFor="Name">Your Name :</label>
                            <input type="text" name={"Name"} id={"Name"}/>
                            <label htmlFor="Email">Your Email :</label>
                            <input type="email" name={"Email"} id={"Email"}/>
                            <label htmlFor="Messsage">Your message:</label>
                            <textarea name={"Message"} id={"Message"} cols={30} rows={5}></textarea>
                        </form>
                    </div>
                </div>
                <div className={"footer"}>
                    <img src={footer} alt="Footer"/>
                </div>
            </div>
        </>
    );
};

export default Footer;
