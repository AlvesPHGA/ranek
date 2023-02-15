import React from 'react';

const Head = (props) => {
   React.useEffect(() => {
      console.log(props);
      document.title = `Ranek | ${props.title}`;
   }, [props]);
   return;
};

export default Head;
