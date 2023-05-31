import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductRoutes from '../features/products/productRoutes';
import CartRoutes from '../features/cart/cartRoutes';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home/*" element={<ProductRoutes />} />
        <Route path="/cart/*" element={<CartRoutes />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
