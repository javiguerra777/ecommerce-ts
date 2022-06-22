import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import getAllProducts from '../api/Api';
import { Link } from 'react-router-dom';

const Mainpage = () => {
  const [array, setArray] = useState<any>([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      console.log(res.data);
      setArray(res.data);
    })
  }, [])
  
  return (
    <div>
      <div className='products'>
      {array.map((data : any)=>  {
        return (
          <div className='card' key={nanoid()}>
            <h5>{data.title}</h5>
            <img className='image' src={data.image} alt={data.description} />
            <p>${data.price} <br />
              items left {data.rating.count}<br />
              Rating {data.rating.rate}</p>
            <Link to={`product/${data.id}`}>View Details</Link>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Mainpage