import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './assets/components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Products />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
