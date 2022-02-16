import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AllHome from "./pages/AllHome";
import AboutMePages from "./pages/pages/AboutMePages/AboutMePages";



function App() {
  return (
    <>
      <div >

      <BrowserRouter>
        <div className="Container">
          <Routes>
            <Route exact path="/" element={AllHome()}/>
            {/*<Route exact path="/Projects" element={ProjectsHome()}/>*/}
            <Route exact path="/AboutMe" element={AboutMePages()}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
