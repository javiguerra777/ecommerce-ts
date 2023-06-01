import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../common/components/Header';
import ProductRoutes from '../features/products/productRoutes';
import CartRoutes from '../features/cart/cartRoutes';
import "react-toastify/dist/ReactToastify.css";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
`;
function App() {
  return (
    <AppWrapper>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home/*" element={<ProductRoutes />} />
        <Route path="/cart/*" element={<CartRoutes />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
