import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";

import '../styles/ComponentsStyles/ProgressBar.css'

const ProgressBarFunction = ({url,alt,completed,max,color}) => {
    return (
        <div className={"ProgressContainer"}>
            <img src={url} alt={alt} title={alt} className={"imgProgressBar"} />
            <ProgressBar completed={completed} maxCompleted={max} bgColor={color} animateOnRender={"true"} className={"progressBar"} />
        </div>
    );
};

export default ProgressBarFunction;
