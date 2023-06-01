import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import UseGetCart from '../hooks/useGetCart';
import { useGetAllCategoriesQuery } from '../api/CategoriesApi';

const HeaderWrapper = styled.nav`
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;

`;
const SearchWrapper = styled.form`
    --border-radius: 5px;
    margin: 0 0 0 10px;
    display: flex;
    flex-direction: row;
    .search-container {
      margin: 0 0 0 5px;
      border: 1px solid gray;
      border-radius: var(--border-radius);
      display: flex;
      flex-direction: row;
      height: 100%;
      input {
        border: none;
      }
      button {
        height: 100%;
        margin: 0;
        border: none;
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        background-color: #898C91;
        color: white;
      }
      select {
        height: 100%;
        width: 50px;
        border: none;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        background-color: #FCFCFC;
        border-right: solid 1px gray;
      }
      select:hover {
        cursor: pointer;
      }
    }`
const NavLinksWrapper = styled.div`
  height: 100%;
  display: flex;
  .cart-link {
    display: flex;
    text-decoration: none;
    color: black;
    position: relative;
    .cart-link-text {
      align-self: flex-end;
    }
    .cart-link-text:hover {
      color: dodgerblue;
      text-decoration: underline;
    }
    .cart-count {
      position: absolute;
      top: -10px;
      left: 15px;
    }
  }
`;
export default function NavBar() {
  const { cart } = UseGetCart();
  const { data, error, isLoading } = useGetAllCategoriesQuery('');
  const [searchVal, setSearchVal] = useState('');
  const searchItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchVal('');
  };
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  return (
    <HeaderWrapper>
      <SearchWrapper onSubmit={searchItems}>
        <label htmlFor='search'>
          <strong>Search</strong>
        </label>
        <div className="search-container">
          <select>
              <option defaultChecked>All</option>
              {(!isLoading && !error) && (
                <>
                  {data.map((category: string) => (
                    <option key={nanoid()}>{category}</option>
                  ))}
                </>
              )}
            </select>
            <input
              name='search'
              id='search'
                value={searchVal}
                placeholder="Ex: Mens Casual Fit"
              onChange={(e) => setSearchVal(e.target.value)}
            />
          <button type='submit' className="px-2">Go</button>
        </div>
      </SearchWrapper>
      <NavLinksWrapper>
          <Link to="/cart" className="cart-link ml-3">
            <AiOutlineShoppingCart size={30} />
            <span className="cart-link-text">Cart</span>
            <div className="cart-count bg-red-500 px-2 rounded-full text-white">
            {cart.length > 0 && (
              <>
                {cart.reduce(
                (prev, curr) => prev + curr.count, 0
                )}
              </>)}
            </div>
          </Link>
      </NavLinksWrapper>
    </HeaderWrapper>
  )
}

