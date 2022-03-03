import React from 'react';

import '../styles/ComponentsStyles/Card.css';
import nofund from '../Img/no-image-found.png';
import porfolio from '../Img/Project/PortFolio.png';
import Tmdb from '../Img/Project/Tmdb.png';
import noel from '../Img/Project/Noel.png';

const Card = ({
  id = '',
  image = '',
  name = '',
  description = '',
  created = '',
  update = '',
  url = '',
}) => {
  const date = new Date(created.toString());
  const updates = new Date(update.toString());

  if (id === 454875724) {
    image = porfolio;
  } else if (id === 435811151) {
    image = noel;
  } else if (id === 440596160) {
    image = Tmdb;
  }
  console.log(image);

  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img src={image === '' ? nofund : image} alt={name} style={{
            height: '200px',
            borderRadius: '10px 0 0 10px',
          }}/>
        </div>
        <div className='card-body'>
          <div>
            <h5 className='card-title'>{name.replace(/\b(Project|-)|[#_-]/g, ' ')}</h5>
          </div>
          <h6 className='card-subtitle'>Created at : {((date.getDate() < 10
            ? '0' + date.getDate()
            : date.getDate()) + '/' + ((date.getMonth() + 1) < 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1) + '/' + date.getFullYear()) + ' '} Updated at
                                        : {(updates.getDate() < 10
              ? '0' + updates.getDate()
              : updates.getDate()) + '/' + ((updates.getMonth() + 1) < 10
              ? '0' + (updates.getMonth() + 1)
              : updates.getMonth() + 1) + '/' + updates.getFullYear()}</h6>
          <div>
            <p className='card-text'>{description}</p>
          </div>
          <div className='card-footer'>
            <a href={url} className='card-link'>Voir le répertoire Github</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;