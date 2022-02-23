import React from 'react';
import NavBar from '../../../components/NavBar';
import AboutMe from '../StarterPages/AboutMe';

import '../../../styles/pages/AboutMePages/AboutMePages.css';

import ProgressBarFunction from '../../../components/ProgressBar';

import html from '../../../Img/LogoLanguage/html.png';
import css from '../../../Img/LogoLanguage/css-3.png';
import js from '../../../Img/LogoLanguage/js.png';
import php from '../../../Img/LogoLanguage/php.png';
import mysql from '../../../Img/LogoLanguage/logo-mysql-170x115.png';
import sql from '../../../Img/LogoLanguage/database.png';
import bootstrap from '../../../Img/LogoLanguage/bootstrap.png';
import react from '../../../Img/LogoLanguage/physics.png';
import symfony from '../../../Img/LogoLanguage/symfony_black_03.png';
import figma from '../../../Img/LogoLanguage/figma.png';
import photoshop from '../../../Img/LogoLanguage/photoshop.png';
import illustrator from '../../../Img/LogoLanguage/illustrator.png';
import xd from '../../../Img/LogoLanguage/Adobe_XD_CC_icon.svg';
import git from '../../../Img/LogoLanguage/Git-Icon-1788C.png';

import forest from '../../../Img/forest.png';
import travel from '../../../Img/airplane.png';
import tecnology from '../../../Img/chip.png';


const AboutMePages = () => {

  return (
    <>
      <NavBar/> <AboutMe activate={1}/>
      <div className={'ContentAboutMePages'}>
        <div className={'Separator'}></div>
        <h1><span className={'Number'}>1. </span>Who I am ? </h1>
        <div className={'centerContentAboutMePages'}>

          <div className={'leftAboutMe'}>
            <div className={'imgProfil'}></div>
          </div>
          <div className={'rightAboutMe'}>
            <h1>Juston Gaetan</h1>
            <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales
                 mauris id ornare. Cras molestie purus purus, vitae ultrices ligula bibendum vitae.
                 In hac habitasse platea dictumst. Mauris at purus sapien. Sed rutrum ullamcorper
                 odio eu pulvinar. Suspendisse at luctus massa, non imperdiet nulla. Curabitur non
                 justo in massa luctus euismod. In ac dolor nisi. Integer ac tincidunt elit,
                 venenatis laoreet justo. Etiam malesuada odio convallis odio rhoncus, nec finibus
                 ex placerat. Donec nec lectus quam.</h3>
          </div>
        </div>
      </div>
      <div className={'SecondContentAboutMePages'}>
        <div className={'Separator2'}></div>
        <h1><span className={'Number'}>2. </span>My hobbies</h1>
        <div className={'centerSecondContentAboutMePages'}>
          <div className={"ContentHobbies"}>
            <img src={tecnology} alt='logo technology' className={'imgHobbies '}/>
            <h1>Technology</h1>
            <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales
                 mauris id ornare. Cras molestie purus purus, vitae ultrices ligula bibendum vitae.
                 In hac habitasse platea dictumst. Mauris at purus sapien. Sed rutrum ullamcorper
                 odio eu pulvinar. Suspendisse at luctus massa, non imperdiet nulla. Curabitur non
                 justo in massa luctus euismod. In ac dolor nisi. Integer ac tincidunt elit,
                 venenatis laoreet justo. Etiam malesuada odio convallis odio rhoncus, nec finibus
                 ex placerat. Donec nec lectus quam.</h3>
          </div>
          <div className={"ContentHobbies"}>
            <img src={forest} alt='logo forest' className={'imgHobbies '}/>
            <h1>Nature</h1>
            <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales
                 mauris id ornare. Cras molestie purus purus, vitae ultrices ligula bibendum vitae.
                 In hac habitasse platea dictumst. Mauris at purus sapien. Sed rutrum ullamcorper
                 odio eu pulvinar. Suspendisse at luctus massa, non imperdiet nulla. Curabitur non
                 justo in massa luctus euismod. In ac dolor nisi. Integer ac tincidunt elit,
                 venenatis laoreet justo. Etiam malesuada odio convallis odio rhoncus, nec finibus
                 ex placerat. Donec nec lectus quam.</h3>
          </div>
          <div className={"ContentHobbies"}>
            <img src={travel} alt='logo travel' className={'imgHobbies '}/>
            <h1>Travel</h1>
            <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales
                 mauris id ornare. Cras molestie purus purus, vitae ultrices ligula bibendum vitae.
                 In hac habitasse platea dictumst. Mauris at purus sapien. Sed rutrum ullamcorper
                 odio eu pulvinar. Suspendisse at luctus massa, non imperdiet nulla. Curabitur non
                 justo in massa luctus euismod. In ac dolor nisi. Integer ac tincidunt elit,
                 venenatis laoreet justo. Etiam malesuada odio convallis odio rhoncus, nec finibus
                 ex placerat. Donec nec lectus quam.</h3>
          </div>
        </div>
      </div>
      <div className={'LastContentAboutMePages'}>
        <div className={'Separator3'}></div>
        <h1><span className='Number'>3.</span> Skills</h1>
        <div className={'centerLastContentAboutMePages'}>
          <div className='leftLastContent'>
            <ProgressBarFunction url={html} alt={'logo html'} completed={75} max={100} color={'orange'}/>
            <ProgressBarFunction url={css} alt={'logo css'} completed={65} max={100} color={'darkturquoise '}/>
            <ProgressBarFunction url={js} alt={'logo javascript'} completed={70} max={100} color={'gold'}/>
            <ProgressBarFunction url={php} alt={'logo php'} completed={65} max={100} color={'cadetblue'}/>
            <ProgressBarFunction url={sql} alt={'logo sql'} completed={60} max={100} color={'coral'}/>
            <ProgressBarFunction url={mysql} alt={'logo mysql'} completed={60} max={100} color={'grey'}/>
            <ProgressBarFunction url={bootstrap} alt={'logo BootStrap'} completed={65} max={100} color={'purple'}/>
          </div>
          <div className='rightLastContent'>
            <ProgressBarFunction url={react} alt={'logo react'} completed={60} max={100} color={'lightBlue'}/>
            <ProgressBarFunction url={symfony} alt={'logo symfony'} completed={20} max={100} color={'black'}/>
            <ProgressBarFunction url={figma} alt={'logo figma'} completed={75} max={100} color={'red'}/>
            <ProgressBarFunction url={photoshop} alt={'logo photoshop'} completed={65} max={100} color={'cadetblue'}/>
            <ProgressBarFunction url={illustrator} alt={'logo illustrator'} completed={50} max={100} color={'coral'}/>
            <ProgressBarFunction url={xd} alt={'logo xd'} completed={25} max={100} color={'pink'}/>
            <ProgressBarFunction url={git} alt={'logo git'} completed={60} max={100} color={'orange'}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePages;