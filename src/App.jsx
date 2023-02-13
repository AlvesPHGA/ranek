import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './assets/components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';

function App() {
   const [datas, setDatas] = React.useState([]);

   React.useEffect(() => {
      fetch('https://ranekapi.origamid.dev/json/api/produto')
         .then((res) => res.json())
         .then((data) => setDatas(data));
   }, []);

   console.log(datas);

   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/*" element={<Products datas={datas} />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
