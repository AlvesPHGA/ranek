import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }

   a{
      text-decoration: none;
   }

   img{
      max-width: 100%;
   }
`;
