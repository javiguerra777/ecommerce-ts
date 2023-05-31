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
    margin: 0 0 0 10px;
    display: flex;
    flex-direction: row;
    .search-container {
      margin: 0 0 0 5px;
      border: 1px solid gray;
      border-radius: 5px;
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
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #898C91;
        color: white;
      }
      select {
        height: 100%;
        width: 50px;
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
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
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
    color: dodgerblue;
  }
  .cart-link {
    display: flex;
    color: white;
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
          <span>Search Products</span>
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
          <button type='submit'>Go</button>
        </div>
      </SearchWrapper>
      <NavLinksWrapper>
        <div className="cart-link">
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
          {cart.length > 0 && <div>{cart.reduce(
            (prev, curr) => prev + curr.count, 0
          )}</div>}
        </div>
      </NavLinksWrapper>
    </HeaderWrapper>
  )
}

