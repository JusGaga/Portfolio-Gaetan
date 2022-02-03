import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AllHome from "./pages/AllHome";


function App() {
  return (
    <>
      <div >
      <BrowserRouter>
        <div className="Container">
          <Routes>
            <Route exact path="/" element={AllHome()}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
