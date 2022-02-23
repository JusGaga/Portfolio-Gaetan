import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/NavBar";
import Projects from "../StarterPages/Projects";

import "../../../styles/ComponentsStyles/Card.css"

const MyComponent = () => {
    const [info,setInfo] = useState([])


    const fetchData = () => {
        fetch("https://api.github.com/users/JusGaga/repos").then(res => {
            return res.json();
        }).then(data => {
            setInfo(data)
        })
    }

    useEffect(() => {
        fetchData()
    },[])

    function createCard() {

    }

    return <>
        <NavBar/>
        <Projects activate={1}/>
        <div className={"ContentProjects"}>
            <div className={"Separator"}></div>
            <h1>Project list</h1>
            <div className={"centerContentProjects"}>
                {info.map(infos => {
                    if(infos.name.includes("Project") === true) {
                        console.log(infos)
                        // createCard();
                    }})}


                {/*{info.filter(infos => (*/}
                {/*    infos.name.includes("Project").map(p => (*/}
                {/*        console.log(p)*/}
                {/*    ))*/}
                {/*))};*/}

            </div>
        </div>
    </>;
};

export default MyComponent;
