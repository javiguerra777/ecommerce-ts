import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Mainpage from './pages/Mainpage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path ="*" element ={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
