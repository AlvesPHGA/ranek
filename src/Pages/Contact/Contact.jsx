import React from 'react';
import Head from '../../components/Head/Head';
import { Flex, Wrap } from '../../style/Styles.style';
import { BoxContact, BoxImage, ContactStyle } from './Contact.style';

const contactList = [
   {
      id: 'email',
      content: 'contato@email.com',
   },
   {
      id: 'phone',
      content: '11 99889 0000',
   },
   {
      id: 'street',
      content: 'Rua Tal, 999',
   },
];

const Contact = () => {
   return (
      <ContactStyle>
         <Head title="Contato" />
         <Wrap className="showContent">
            <h1>Contatos</h1>
            <Flex>
               <BoxImage>
                  <img
                     src="https://images.unsplash.com/photo-1585909696001-4b0d7be2d648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                     alt=""
                  />
               </BoxImage>
               <BoxContact>
                  <h2>Entre em contato</h2>
                  <ul>
                     {contactList.map(({ id, content }) => (
                        <li key={id}>{content}</li>
                     ))}
                  </ul>
               </BoxContact>
            </Flex>
         </Wrap>
      </ContactStyle>
   );
};

export default Contact;
