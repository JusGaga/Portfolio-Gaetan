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

import profil from '../../../Img/Profil/Profil.jpg';
import pdf from '../../../media/Cv_Dev.pdf';

const AboutMePages = () => {

  return (
    <>
      <NavBar/> <AboutMe activate={1}/>
      <div className={'ContentAboutMePages'}>
        <div className={'Separator'}/>
        <h1><span className={'Number'}>1. </span>Who I am ? </h1>
        <div className={'centerContentAboutMePages'}>

          <div className={'leftAboutMe'}>
            <img src={profil} alt='profil' className={'imgProfil'}/>
          </div>
          <div className={'rightAboutMe'}>
            <h1>Juston Gaëtan</h1>
            <h3> Développeur passionné dans le domaine du web , actuellement en formation pour
                 devenir Développeur Web et Web Mobile. Je conçois et réalise des sites web du
                 cahier des charges à la mise en ligne. J'adore découvrir de nouvelles technologies
                 ce qui me permet d'évoluer constamment.</h3><br/>
            <h3>Vous souhaitez obtenir mon CV au format PDF c'est <a href={pdf} download={'Cv_Gaetan_Juston.pdf'} className='link link--metis'>ici</a>
            </h3>
          </div>
        </div>
      </div>
      <div className={'SecondContentAboutMePages'}>
        <div className={'Separator2'}></div>
        <h1><span className={'Number'}>2. </span>Mes hobbies</h1>
        <div className={'centerSecondContentAboutMePages'}>
          <div className={'ContentHobbies'}>
            <img src={tecnology} alt='logo technology' className={'imgHobbies '}/>
            <h1>Technologie</h1>
            <h3> Passionné de technologie, j'aime me tenir informé des dernières innovations allant
                 de l'informatique à l'espace. Aujourd'hui la technologie fait partie
              intégrante de notre quotidien même si l'illectronisme touche actuellement près 1/4 de la population française.
            </h3>
          </div>
          <div className={'ContentHobbies'}>
            <img src={forest} alt='logo forest' className={'imgHobbies '}/>
            <h1>Nature</h1>
            <h3>La nature est pour moi quelque chose de merveilleux, il faut l'entretenir et en
                prendre soin. Ce que j'aime avec la nature c'est pouvoir sortir me ballader aller
                découvrir des endroits magnifiques, des forêts, des lacs, des montagnes, etc .
                Pouvoir également profiter de celle-ci camper pêcher tout en la respectant. Elle me
                procure le plus grand bien.</h3>
          </div>
          <div className={'ContentHobbies'}>
            <img src={travel} alt='logo travel' className={'imgHobbies '}/>
            <h1>Projet de voyage</h1>
            <h3> J'aimerais découvrir le japon. Dès mon plus jeune âge je me suis plongé dans le monde du manga,
              de l'animé et du japonisme. Aujourd'hui je suis toujours amateur d'animés. Je souhaiterais explorer ce pays,
              afin de comprendre sa Culture et d'expérimenter sa gastronomie.

              </h3>
          </div>
        </div>
      </div>
      <div className={'LastContentAboutMePages'}>
        <div className={'Separator3'}></div>
        <h1><span className='Number'>3.</span> Compétences</h1>
        <div className={'centerLastContentAboutMePages'}>
          <div className='Front-end'>
            <h2>Front-end :</h2>
            <ProgressBarFunction url={html} alt={'logo html'} completed={75} max={100} color={'orange'}/>
            <ProgressBarFunction url={css} alt={'logo css'} completed={65} max={100} color={'darkturquoise '}/>
            <ProgressBarFunction url={js} alt={'logo javascript'} completed={70} max={100} color={'gold'}/>
            <ProgressBarFunction url={bootstrap} alt={'logo BootStrap'} completed={65} max={100} color={'purple'}/>
            <ProgressBarFunction url={react} alt={'logo react'} completed={60} max={100} color={'lightBlue'}/>
          </div>
          <div className={'Back-end'}>
            <h2>Back-end :</h2>
            <ProgressBarFunction url={php} alt={'logo php'} completed={65} max={100} color={'cadetblue'}/>
            <ProgressBarFunction url={sql} alt={'logo sql'} completed={60} max={100} color={'coral'}/>
            <ProgressBarFunction url={mysql} alt={'logo mysql'} completed={60} max={100} color={'grey'}/>
            <ProgressBarFunction url={symfony} alt={'logo symfony'} completed={20} max={100} color={'black'}/>
          </div>
          <div className={'Autres'}>
            <div className={'Design'}>
              <h2> Design :</h2>
              <ProgressBarFunction url={figma} alt={'logo figma'} completed={75} max={100} color={'red'}/>
              <ProgressBarFunction url={xd} alt={'logo xd'} completed={25} max={100} color={'pink'}/>
            </div>
            <div className={'Other'}>
              <h2 className={'mt-2'}>Autres :</h2>
              <ProgressBarFunction url={photoshop} alt={'logo photoshop'} completed={65} max={100} color={'cadetblue'}/>
              <ProgressBarFunction url={illustrator} alt={'logo illustrator'} completed={50} max={100} color={'coral'}/>
              <ProgressBarFunction url={git} alt={'logo git'} completed={60} max={100} color={'orange'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePages;