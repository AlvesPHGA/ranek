import styled from 'styled-components';

export const HeaderStyle = styled.header`
   padding: 20px 0;
   border: 1px solid #cccccc;

   & nav {
      display: flex;
      gap: 1rem;

      & a {
         font-size: 2rem;
         width: fit-content;
         height: fit-content;
         padding: 0.75rem 1.25rem;
         background: #c3c3c3;
         border-radius: 0.5rem;

         &:hover {
            background: #cecece;
         }
      }
   }
`;
