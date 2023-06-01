import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import UseGetProduct from '../../../../common/hooks/useGetProduct';
import { getProduct } from '../../../../app/store/productSlice';
import { useAppDispatch } from '../../../../app/store/StoreTypes';
import { addProduct } from '../../../../app/store/cartSlice';
import breakpoints from '../../../../common/styles/breakpoints';

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}){
    flex-direction: row;
  }
`;
export default function ProductDetails() {
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
    dispatch(addProduct({ ...product, count }));
    toast('Adding content to cart');
  }
  const incrementCount = () => {
    setCount((prev) => prev += 1);
  }
  const decrementCount = () => {
    if (count > 1) {
      setCount((prev) => prev -= 1);
    }
  }
  const renderProduct = () => {
    if (pending) {
      return (
        <div className="flex flex-row justify-center">
          <p>Product Loading...</p>
        </div>
      )
    } else if (error) {
      return (
        <div>
          <p>Error Fetching Product</p>
        </div>
      )
    } else if (!pending && !error) {
      return (
        <ProductWrapper>
          <ImageWrapper>
            <img className='image' src={product.image} alt={product.description} />
          </ImageWrapper>
          <div className="ml-3 flex flex-col">      
            <p className="font-semibold text-lg">{product.title}</p>
            <p className="">
              Product Rating: {product.rating?.rate}
            </p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="flex flex-row my-2">
              <button
                type='button'
                onClick={decrementCount}
                className="bg-gray-300 px-1 rounded"
              >
                <AiOutlineMinus />
              </button>
              <span className="px-2">{count}</span>
              <button
                type='button'
                onClick={incrementCount}
                className="bg-gray-300 px-1 rounded"
              >
                <AiOutlinePlus />
              </button>
            </div>
            <button
              type='button'
              onClick={addProductToCart}
              className="bg-orange-400 h-10 w-40 rounded self-center hover:bg-orange-300"
            >
              Add to Cart
            </button>
          </div>
        </ProductWrapper>
      )
    }
  }
  return (
    <>
    {renderProduct()}
    </>
  )
}