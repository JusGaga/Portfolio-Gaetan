import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarFunction = ({url,alt,completed,max,width,color}) => {
    return (
        <div style={{display:"flex",alignItems:"center",paddingTop:"2em"}}>
            <img src={url} alt={alt} title={alt} style={{width:"48px",paddingRight:"1em"}}/>
            <ProgressBar completed={completed} maxCompleted={max} width={width} bgColor={color} />
        </div>
    );
};

export default ProgressBarFunction;
