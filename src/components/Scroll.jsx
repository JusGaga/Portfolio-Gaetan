import React from 'react';

import "../styles/ComponentsStyles/Scroll.css"

const Scroll = () => {
    return (
        <>
            <div className={"Scrollspace"}>
              <div className={"SmallLine active"} id={"page1"}></div>
              <div className={"SmallLine"} id={"page2"}></div>
              <div className={"SmallLine"} id={"page3"}></div>
              <div className={"SmallLine"} id={"page4"}></div>
            </div>
        </>
    );
};

export default Scroll;
