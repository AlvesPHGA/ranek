import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Wrap } from '../../style/Styles.style';
import { ProductStyle } from './Products.style';

const Products = () => {
   const [products, setProducts] = React.useState(null);
   const [error, setError] = React.useState(null);
   const [load, setLoad] = React.useState(false);

   React.useEffect(() => {
      async function fetchAPI(url) {
         try {
            setLoad(true);
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
         } catch (er) {
            setError('Ocorreu um erro inexperado');
         } finally {
            setLoad(false);
         }
      }

      fetchAPI('https://ranekapi.origamid.dev/json/api/produto');
   }, []);

   if (load) return <h1>Carregando...</h1>;
   if (error) return <p>{error}</p>;
   if (products === null) return null;
   return (
      <ProductStyle>
         <Wrap className="showContent">
            <h1>Produtos</h1>

            <Grid className="showContent">
               {products.map(({ id, nome, fotos }) => (
                  <Link to={id}>
                     <div key={fotos[0]}>
                        <img src={fotos[0].src} alt="" />
                     </div>
                     <h2>{nome}</h2>
                  </Link>
               ))}
            </Grid>
         </Wrap>
      </ProductStyle>
   );
};

export default Products;
