import React from 'react';
import { Wrap } from '../../../style/Styles.style';

import { HeaderStyle } from './Header.styled';

const Header = () => {
   return (
      <HeaderStyle>
         <Wrap>
            <nav>
               <a>Produtos</a>
               <a>Contato</a>
            </nav>
         </Wrap>
      </HeaderStyle>
   );
};

export default Header;
