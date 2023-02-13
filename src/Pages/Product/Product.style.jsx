import styled from 'styled-components';

export const ProductIntern = styled.section`
   padding: 1.25rem 0;
`;

export const BoxImage = styled.div`
   display: flex;
   width: 20vw;

   & img {
      border-radius: 0.75rem;
   }
`;

export const BoxContent = styled.div`
   & h1 {
      font-size: 2rem;
      text-align: left;
      margin-bottom: 0;
   }
`;

export const Price = styled.p`
   font-size: 0.75rem;
   font-weight: 600;
`;

export const Description = styled.p`
   font-size: 1.125rem;
   font-weight: 500;
   width: 20vw;
   margin-top: 1.25rem;
`;
