import React from 'react';

import '../../../styles/pages/StarterPages/Footer.css';

import footer from '../../../Img/Footer.svg';

const Footer = () => {
  return (
    <>
      <div className={'ContainerFooter'}>
        <div className={'ContainerFooter2'}>
          <div className={'leftFooter'}>
            <h3>Ce site web s'inspire
                de <a className='link link--metis' href='https://www.kuon.space'> Kyon
                                                                                  Yagi </a><br/> Les
                images des planètes sont réalisées
                par <a className='link link--metis' href='https://www.figma.com/@seda'> Seda </a>
            </h3>
          </div>
          <div className={'RightFooter'}>
            <h1 style={{
              fontSize: '24px',
              marginBottom: '15px',
              marginLeft: '5px',
              color: 'var(--white)',
            }}>Formulaire de contact</h1>
            <form action='' id={'FormContact'}>
              <label htmlFor='Name'>Votre Nom:</label>
              <input type='text' name={'Name'} id={'Name'} placeholder={'Name...'}/>
              <label htmlFor='Email'>Votre Email :</label>
              <input type='email' name={'Email'} id={'Email'} placeholder={'Email@email.com...'}/>
              <label htmlFor='Messsage'>Votre Message:</label>
              <textarea name={'Message'} id={'Message'} cols={90} rows={15} placeholder={'Your message...'}/>
              <div className={'btnFooter'}>
                <button>Envoyer</button>
              </div>

            </form>
          </div>
        </div>
        <div className={'footer'}>
          <img src={footer} alt='Planet Footer'/>
        </div>
        <div className={'copy'}>
          Réalisé par JusGaga © 2022
        </div>
      </div>
    </>
  );
};

export default Footer;
