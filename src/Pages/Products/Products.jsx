import React from 'react';
import { Wrap } from '../../style/Styles.style';
import Card from './component/Card';
import { ProductStyle } from './Products.style';

const Products = ({ datas }) => {
   // console.log(nome);
   return (
      <ProductStyle>
         <Wrap>
            <h1>Produtos</h1>

            <section>
               {datas.map(({ id, nome, fotos }) => (
                  <Card key={id} name={nome} photo={fotos} />
               ))}
            </section>
         </Wrap>
      </ProductStyle>
   );
};

export default Products;
