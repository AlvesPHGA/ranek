import styled from 'styled-components';

export const ContactStyle = styled.section`
   padding: 4rem 0;

   & h1 {
      font-size: 2rem;
   }
`;

export const BoxImage = styled.div`
   width: 25vw;
   height: 60vh;

   & img {
      height: 100%;
      object-fit: fill;
      border-radius: 0.5rem;
   }
`;

export const BoxContact = styled.div`
   & h2 {
      font-size: 1.5rem;
   }

   & ul {
      position: relative;

      & li {
         position: relative;
         left: 1.5rem;
         display: flex;

         &::before {
            content: '';
            background: #c3c3c3;
            width: 1rem;
            height: 0.25rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 204px;
         }
      }
   }
`;
