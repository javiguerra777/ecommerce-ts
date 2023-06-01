import React from 'react';
import styled from 'styled-components';
import ProductDetails from '../components/product/ProductDetails';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function Product() {
  return (
    <Wrapper>
      <ProductDetails />
      <div>
        <p>Product Reviews</p>
      </div>
    </Wrapper>
  )
}
