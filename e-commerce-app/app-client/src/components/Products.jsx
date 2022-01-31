import ProductItem from "../components/ProductItem";
import styled from "styled-components";

import { popularProducts } from "../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </Container>
  );
};

export default Products;
