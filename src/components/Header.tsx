import React, { useState } from 'react'
import Navbar from './Navbar';
const Header = () => {
    const [searchVal, setSearchVal] = useState<string>('');

  const searchItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchVal('');
  };
  return (
    <nav className='navbar'>
      <form onSubmit={(e)=>searchItems(e)}>
        <label htmlFor='form'>
          <input
            id='form'
              value={searchVal}
              placeholder="Ex: Mens Casual Fit"
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </label>
        <button type='submit'>Search Products</button>
      </form>
      <Navbar />
    </nav>
  )
}

export default Header