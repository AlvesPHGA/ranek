import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrap } from '../../../style/Styles.style';
import { HeaderStyle } from './Header.styled';

const Header = () => {
   return (
      <HeaderStyle>
         <Wrap>
            <nav>
               <NavLink to="/" end>
                  Produtos
               </NavLink>
               <NavLink to="contact">Contato</NavLink>
            </nav>
         </Wrap>
      </HeaderStyle>
   );
};

export default Header;
