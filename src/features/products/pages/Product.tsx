import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../api/Api';
import { useAppDispatch } from '../../../app/store/StoreTypes';
import { addProduct } from '../../../app/store/cartSlice';

interface Item {
  title: string,
  image: string,
  description: string,
  rating: {
    rate: string,
    count: string,
  },
  price: string
}

const Product = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);
  const{ id } = useParams();
  const [product, setProduct] = useState({} as Item);
  useEffect(() => {
    getProduct(id)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const addProductToCart = () => {
    dispatch(addProduct({...product, count}));
  }
  const incrementCount = () => {
    setCount((prev) => prev += 1);
  }
  const decrementCount = () => {
    if (count > 1) {
      setCount((prev) => prev -= 1);
    }
  }
  return (
    <div className='product'>
      <h1>{product.title}</h1>
      <img className='image' src={product.image} alt={product.description} />
      <p>
        Product Rating: {product.rating?.rate} <br/>
        {product.description} <br />
        {product.price} <br />
      </p>
      <div>
        <button type='button' onClick={decrementCount}>
          -
        </button>
        <p>{count}</p>
        <button type='button' onClick={incrementCount}>
          +
        </button>
      </div>
      <button type='button' onClick={addProductToCart}>Add to Cart</button>
    </div>
  )
}

export default Product;