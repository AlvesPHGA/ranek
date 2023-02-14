import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import { AppStyle } from './style/Styles.style';

function App() {
   return (
      <AppStyle>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Products />} />
               <Route path="/produto/:id" element={<Product />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </AppStyle>
   );
}

export default App;
