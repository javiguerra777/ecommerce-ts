import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeProducts from './pages/HomeProducts';
import Layout from '../../common/styles/Layout';
import NavBar from '../../common/components/NavBar';
import Product from './pages/Product';
import NotFound from '../../common/components/NotFound';

export default function ProductRoutes() {
  return (
    <Layout>
      <NavBar />
      <Routes>
        <Route index element={<HomeProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}