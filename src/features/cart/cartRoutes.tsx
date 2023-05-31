import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Layout from '../../common/styles/Layout';

export default function CartRoutes() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Cart />} />
      </Routes>
    </Layout>
  )
}