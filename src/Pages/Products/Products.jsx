import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Wrap } from '../../style/Styles.style';
import Card from './component/Card';
import { ProductStyle } from './Products.style';

const Products = () => {
   const [products, setProducts] = React.useState(null);

   React.useEffect(() => {
      fetch('https://ranekapi.origamid.dev/json/api/produto')
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   if (products === null) return null;
   return (
      <ProductStyle>
         <Wrap>
            <h1>Produtos</h1>

            <Grid>
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
