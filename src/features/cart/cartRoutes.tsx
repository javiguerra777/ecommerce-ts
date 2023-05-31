import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Layout from '../../common/styles/Layout';
import Header from '../../common/components/Header';

export default function CartRoutes() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route index element={<Cart />} />
      </Routes>
    </Layout>
  )
}