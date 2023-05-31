import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getAllProducts from '../../../api/Api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const ProductWrapper = styled.div`
border: solid 1px lightgray;
width: 300px;
.image {
  width: 100%;
  height: 300px;
}
.product-link {
  text-decoration: none;
}
`;
export default function HomeProducts() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      console.log(res.data);
      setArray(res.data);
    })
  }, []);
  
  return (
    <Wrapper>
      <ProductsWrapper>
      {array.map((data : any)=>  {
        return (
          <ProductWrapper key={nanoid()}>
            <img className='image' src={data.image} alt={data.description} />
            <Link to={`product/${data.id}`} className="product-link">{data.title}</Link>
            <p>Rating {data.rating.rate}</p>
            <p>${data.price} <br />
           </p>
          </ProductWrapper>
        )
      })}
      </ProductsWrapper>
    </Wrapper>
  )
}