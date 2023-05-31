import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import UseGetProduct from '../../../common/hooks/useGetProduct';
import { getProduct } from '../../../app/store/productSlice';
import { useAppDispatch } from '../../../app/store/StoreTypes';
import { addProduct } from '../../../app/store/cartSlice';
import breakpoints from '../../../common/styles/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}){
    flex-direction: row;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  button {
    border-radius: 99px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: orange;
    background-color: black;
  }
  button:hover {
    cursor: pointer;
  }
`;
const DetailsWrapper = styled.div`
  p {
    padding: 0;
    margin: 0;
  }
  .title {
    font-weight: 600;
    font-size: 20px;
  }
`;
const Product = () => {
  const { product, activeId, pending, error } = UseGetProduct();
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);
  const{ id } = useParams();
  useEffect(() => {
    if (id !== activeId) {
      dispatch(getProduct(id || ''));
    }
  }, [id, dispatch, activeId]);
  const addProductToCart = () => {
    dispatch(addProduct({...product, count}));
  }
  const incrementCount = () => {
    setCount((prev) => prev += 1);
  }
  const decrementCount = () => {
    if (count > 1) {
      setCount((prev) => prev -= 1);
    }
  }
  return (
    <Wrapper>
      {pending ? (
        <p>pending</p>
      ) : (
          <>
          <ImageWrapper>
            <img className='image' src={product.image} alt={product.description} />
          </ImageWrapper>
          <DetailsWrapper>      
            <p className="title">{product.title}</p>
            <p className="">
              Product Rating: {product.rating?.rate}
            </p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <CounterWrapper>
              <button type='button' onClick={decrementCount}>
                <AiOutlineMinus />
              </button>
              <span>{count}</span>
              <button type='button' onClick={incrementCount}>
                <AiOutlinePlus />
              </button>
            </CounterWrapper>
            <button type='button' onClick={addProductToCart}>Add to Cart
            </button>
          </DetailsWrapper>
          </> 
      )}
    </Wrapper>
  )
}

export default Product;