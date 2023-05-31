import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UseGetCart from '../hooks/useGetCart';

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #28282B;
  width: 100%;
  height: 50px;
`;
export default function Header() {
  const { cart } = UseGetCart();
  const [searchVal, setSearchVal] = useState<string>('');
  const searchItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchVal('');
  };
  return (
    <HeaderWrapper>
      <form onSubmit={searchItems}>
        <label htmlFor='form'>
          <input
            id='form'
              value={searchVal}
              placeholder="Ex: Mens Casual Fit"
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </label>
        <button type='submit'>Search Products</button>
      </form>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart {cart.length > 0 && cart.length}</Link>
      </div>
    </HeaderWrapper>
  )
}
