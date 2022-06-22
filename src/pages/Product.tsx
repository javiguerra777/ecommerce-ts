import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/Api';

interface Provider {
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
  const{ id } = useParams();
  const [product, setProduct] = useState<Provider | any>({});
  useEffect(() => {
    getProduct(id)
      .then(({ data }) => {
        console.log(data);
        setProduct(data);
      })
  }, [id]);
  const addToCart = () => {
    return 'hello';
  }
  return (
    <div className='product'>
      <h1>{product.title}</h1>
      <img className='image' src={product.image} alt={product.description} />
      <p>
        Items left:{product.rating?.count} |  Product Rating:{product.rating?.rate} <br/>
        {product.description} <br />
        {product.price} <br />
      </p>
      <button type='button' onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product