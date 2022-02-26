import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/NavBar";
import Projects from "../StarterPages/Projects";


import "../../../styles/pages/ProjectPages/ProjectPages.css"
import Card from '../../../components/Card';

const MyComponent = () => {
    const [info,setInfo] = useState([])



    const fetchData = () => {
        fetch("https://api.github.com/users/JusGaga/repos?sort=created_at").then(res => {
            return res.json();
        }).then(data => {
            setInfo(data)
        })
    }

    useEffect(() => {
        fetchData()
    },[])

console.log(info)

    return <>
        <NavBar/>
        <Projects activate={1}/>
        <div className={"ContentProjects"}>
            <div className={"Separator"}/>
            <h1>Project list</h1>
            <div className={"centerContentProjects here"}>

                {info.filter(data => data.name.includes("Project")).map(infos=>
                    <Card key={infos.id} name={infos.name} description={infos.description}  created={infos.created_at}  update={infos.updated_at} url={infos.html_url} website={"#"}/>
                )}

            </div>
        </div>
    </>;
};

export default MyComponent;
