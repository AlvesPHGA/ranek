import React from 'react';
import { useParams } from 'react-router-dom';

import { Flex, Wrap } from '../../style/Styles.style';
import {
   BoxContent,
   BoxImage,
   ProductIntern,
   Price,
   Description,
} from './Product.style';

const Product = () => {
   const [product, setProduct] = React.useState(null);
   const [load, setLoad] = React.useState(false);
   const [error, setError] = React.useState(null);

   const { id } = useParams();

   React.useEffect(() => {
      async function fetchProd(url) {
         try {
            setLoad(true);
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data);
         } catch (er) {
            setError('Um erro inesperado aconteceu.');
         } finally {
            setLoad(false);
         }
      }

      fetchProd(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
   }, [id]);

   if (load) return <h1>Carregando...</h1>;
   if (error) return <p>{error}</p>;
   if (product === null) return null;
   return (
      <Wrap>
         <ProductIntern>
            <Flex>
               <BoxImage>
                  <img
                     src={product.fotos[0].src}
                     alt={`Foto ${product.fotos[0].titulo}`}
                  />
               </BoxImage>
               <BoxContent>
                  <h1>{product.nome}</h1>

                  <Price>R$ {product.preco}</Price>
                  <Description>{product.descricao}</Description>
               </BoxContent>
            </Flex>
         </ProductIntern>
      </Wrap>
   );
};

export default Product;