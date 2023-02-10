import React from 'react';

const Card = ({ name, photo }) => {
   return (
      <>
         <div key={photo[0]}>
            <img src={photo[0].src} alt="" />
         </div>
         <h2>{name}</h2>
      </>
   );
};

export default Card;
