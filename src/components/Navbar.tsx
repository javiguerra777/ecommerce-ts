import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const cart = [0,3,4,4]
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart{cart.length}</Link>
    </div>
  )
}

export default Navbar