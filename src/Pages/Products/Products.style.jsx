import styled from 'styled-components';

export const ProductStyle = styled.section`
   padding: 4rem 0;
   min-height: calc(100vh + 10vh);
   display: flex;
   margin: 0 auto;
   & a {
      color: black;
      border-radius: 0.5rem;

      & img {
         border-radius: 0.5rem;
      }

      &:hover {
         background-color: #fdfcf9;
      }
   }
`;
