import React from 'react';
import '../../../styles/pages/StarterPages/Contact.css';
import Scroll from '../../../components/Scroll';
import UnderTitle from '../../../Img/UnderTitle.svg';
import ContactMe from '../../../Img/ContactMe.png';
import planet4 from '../../../Img/planet4.svg';
import planet5 from '../../../Img/planet5.svg';

const Contact = () => {
  return (
    <>
      <div className={'planet4'}>
        <img src={planet4} alt='planet4'/>
      </div>
      <div className={'middlePageHome4 '} id={'Contact'}>
        <Scroll page={4}/>
        <div className={'ContainerContact'}>
          <div className='Present3'>
            <h1>Contactez-moi</h1>
            <img className='underTitle' src={UnderTitle} alt={'underTitle'}/>
            <h2><a href='#FormContact'>Mail : gaetan3107@gmail.com</a><br/><br/><br/>Téléphone : 07
                                                                                     77 95 15 80
            </h2>
            <div><a href='#ContainerFooter'>Formulaire de contact</a></div>
          </div>
        </div>
        <img className={'ContactMeImg '} src={ContactMe} alt='Contactez moi'/>
      </div>
      <div className={'planet5'}>
        <img src={planet5} alt='planet5'/>
      </div>
      <div className={'line4'}/>
    </>
  );
};

export default Contact;
