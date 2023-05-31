import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 0 10px 0;
  .home-link {
    text-decoration: none;
    color: green;
    font-size: 32px;
    margin: 0 0 0 10px;
  }
  .home-link:hover {
    text-decoration: underline;
    color: dodgerblue;
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <Link to="/home" className="home-link">Ecommerce Site</Link>
    </Wrapper>
  )
}

