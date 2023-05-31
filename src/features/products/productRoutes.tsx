import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeProducts from './pages/HomeProducts';
import Layout from '../../common/styles/Layout';
import Header from '../../common/components/Header';
import Product from './pages/Product';
import NotFound from '../../common/components/NotFound';

export default function ProductRoutes() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route index element={<HomeProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}