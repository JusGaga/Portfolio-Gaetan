import React from 'react';

import '../../../styles/pages/StarterPages/Home.css';

import NavBar from '../../../components/NavBar';
import Scroll from '../../../components/Scroll';

import planet from '../../../Img/Planet.svg';


const Home = () => {
  return (
    <>
      <NavBar/>
      <div className={'middlePage '} id={'home'}>
        <Scroll page={1}/>
        <div className={'centerPage'}>
          <div className={'circle '}>
            <h3 className={'center one'}>Juston Gaetan</h3>
            <p className={'center two'}>Développeur Web</p>
          </div>
          <div className={'planet '}>
            <img src={planet} alt='Planet'/>
          </div>
        </div>
      </div>
      <div className={'bottom'}>
        <div className={'scrollDown'}>
          Défiler vers le bas
        </div>
        <div className='line '></div>
      </div>
    </>
  );
};

export default Home;
