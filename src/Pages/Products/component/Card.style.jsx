import styled from 'styled-components';

export const CardStyle = styled.a`
   /* width: 300px; */
   display: block;
   border: 1px solid red;
   width: fit-content;
   /* cursor: pointer; */
   border-radius: 0.5rem;
   transition: 0.5s ease;

   &:hover {
      background-color: #fdfcf9;

      & img {
         object-fit: cover;
      }
   }
`;

export const BoxImage = styled.div`
   width: 100%;
   margin-bottom: 1rem;
   height: 400px;
   flex-shrink: 0;

   & img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
   }
`;
