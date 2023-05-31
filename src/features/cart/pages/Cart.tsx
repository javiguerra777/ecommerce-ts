import React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UseGetCart from '../../../common/hooks/useGetCart';
import { useAppDispatch } from '../../../app/store/StoreTypes';
import { removeProduct, incrementProduct, decrementProduct } from '../../../app/store/cartSlice';

const Wrapper = styled.div``;
const ItemWrapper = styled.div``;
const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = UseGetCart();
  const removeItemFromCart = (id: number) => {
    dispatch(removeProduct(id));
  }
  const decrementProductInCart = (id: number) => {
    dispatch(decrementProduct(id));
  };
  const incrementProductInCart = (id: number) => {
    dispatch(incrementProduct(id));
  }
  return (
    <Wrapper>
      <div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <ItemWrapper key={nanoid()}>
            <button type="button" onClick={() => removeItemFromCart(item.id)}>X</button>
            <Link to={`/home/product/${item.id}`}>{item.title}</Link>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <div>
              <button type="button" onClick={() => decrementProductInCart(item.id)}>
                -
              </button>
              <p>{item.count}</p>
              <button type="button" onClick={() => incrementProductInCart(item.id)}>
                +
              </button>
            </div>
          </ItemWrapper>
        ))
      ): <p>No Items</p>}
      </div>
      <Link to="/">Go to Checkout</Link>
    </Wrapper>
  )
}

export default Cart