import styled from 'styled-components';

export const Flex = styled.section`
   display: flex;
   gap: 1.75rem;
`;

export const Wrap = styled.section`
   width: 1200px;
   height: fit-content;
   margin: 0 auto;
   position: relative;
`;

export const Grid = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: space-between;
   gap: 2rem;
`;
