import React from 'react'
import { useSelector } from "react-redux";
import ProductCard from '../ProductCard/ProductCard';

const Main = () => {
 


    const items = useSelector((state) => state.products.items);


  return (
    <div>
      <div>
      </div>
       <div className=' grid gap-4 grid-cols-2 md:grid-cols-6 lg:grid-cols-8 px-8'>
        {items.map((item) => (
            <ProductCard item={item} key={item.id} />
        ))}
    </div>
    </div>
  )
}

export default Main