import React from 'react';

const Images = (props) => (
  <img
    style={{ height: '500px' }}
    src={require(`./images/${props.imageName}.jpg`).default}
  />
);

export default Images;
