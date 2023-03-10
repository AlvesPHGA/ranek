import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Load from '../../components/Load/Load';
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

   if (load) return <Load />;
   if (error) return <p>{error}</p>;
   if (products === null) return null;
   return (
      <ProductStyle>
         <Head title="Home" />
         <Wrap className="showContent">
            <h1>Produtos</h1>

            <Grid className="showContent">
               {products.map(({ id, nome, fotos }) => (
                  <Link to={`produto/${id}`} key={id}>
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
