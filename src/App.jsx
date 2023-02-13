import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Products />} />
               <Route path=":id" element={<Product />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
