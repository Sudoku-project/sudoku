import React from 'react';

import './style.scss';

const IconButton = ({ image, altImg }) => {

  return (
    <div className='icon'>
      <img
        src={image}
        alt={altImg}
        className='icon--img'
      />
    </div>
  );
};

export default IconButton;