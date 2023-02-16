import styled from 'styled-components';

export const LoadStyle = styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LoadObj = styled.div`
   width: 5rem;
   height: 5rem;
   border-radius: 50%;
   border: 1rem solid #ccc;
   border-right-color: transparent;
   animation: load 1s infinite;

   @keyframes load {
      to {
         transform: rotate(360deg);
      }
   }
`;
