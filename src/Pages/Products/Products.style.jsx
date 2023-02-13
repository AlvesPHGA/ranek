import styled from 'styled-components';

export const ProductStyle = styled.section`
   padding: 4rem 0;

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
