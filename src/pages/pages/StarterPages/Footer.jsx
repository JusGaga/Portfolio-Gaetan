import React from 'react';
import emailjs from '@emailjs/browser';

import '../../../styles/pages/StarterPages/Footer.css';

import footer from '../../../Img/Footer.svg';

const Footer = () => {
  let b = 0;


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(!e.target.Name.value);
    let a = document.querySelector('#Error');
    if (e.target.Name.value !== '' && e.target.Email.value !== '' && e.target.Message.value !== '') {
      emailjs.sendForm('service_rn0s6ow', 'template_z62u9vd', e.target, 'ZZMiG-2_SQMxTp1ld')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      let child = a.lastElementChild;
      while (child) {
        a.removeChild(child);
        child = a.lastElementChild;
      }
      const error = document.createElement('h3');
      error.innerText = 'Votre message à bien était envoyé';
      error.style.background = 'rgba(0, 255, 50, 0.5)';
      error.className = 'error';
      a.appendChild(error);
    } else if (b < 1) {
      b++;
      const error = document.createElement('h3');
      error.innerText = 'Veuillez remplir la totalité des champs';
      error.style.background = 'rgba(255, 50, 50, 0.5)';
      error.className = 'error';
      a.appendChild(error);
    }

    e.target.reset();
  };


  return (
    <>
      <div className={'ContainerFooter'} id={'ContainerFooter'}>
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
            <form id={'FormContact'} onSubmit={sendEmail}>
              <label htmlFor='Name'>Votre Nom:</label>
              <input type='text' name={'Name'} id={'Name'} placeholder={'Nom...'}/>
              <label htmlFor='Email'>Votre Email :</label>
              <input type='email' name={'Email'} id={'Email'} placeholder={'Email@email.com...'}/>
              <label htmlFor='Messsage'>Votre Message:</label>
              <textarea name={'Message'} id={'Message'} cols={90} rows={15} placeholder={'Votre message...'}/>
              <div className={'btnFooter'}>
                <input type={'submit'} value={'Envoyer'}/>
              </div>
              <div id={'Error'}>

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
