import React from 'react';
import { BoxImage, CardStyle } from './Card.style';

const Card = ({ name, photo }) => {
   return (
      <CardStyle>
         <BoxImage key={photo[0]}>
            <img src={photo[0].src} alt="" />
         </BoxImage>
         <h2>{name}</h2>
      </CardStyle>
   );
};

export default Card;
