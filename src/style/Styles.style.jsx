import styled from 'styled-components';

export const AppStyle = styled.section`
   min-height: calc(100vh + 10vh);
   display: flex;
   flex-direction: column;
   margin: 0 auto;
`;

export const Flex = styled.section`
   display: flex;
   gap: 1.75rem;
`;

export const Wrap = styled.section`
   width: 1200px;
   height: fit-content;
   margin: 0 auto;
   position: relative;

   &.showContent {
      opacity: 0;
      animation: showContent 0.7s ease forwards;
   }

   @keyframes showContent {
      to {
         opacity: 1;
      }
   }
`;

export const Grid = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: space-between;
   gap: 2rem;
`;
