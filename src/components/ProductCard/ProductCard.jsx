import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { basket, budget } from "../../api/productSlice";

const ProductCard = ({ item }) => {
  const budget = useSelector((state) => state.products.budget);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(basket({ id: item.id, count: count }));
  }, [dispatch, count, item.id]);
  const buyButton = () => {
    setCount((p) => p + 1);
  };
  const sellButton = () => {
    setCount((p) => p - 1);
  };
  const handleChange = (value) => {
    const maxCount = Math.floor(budget / item.productPrice) + count; // + count dememizin nedeni başta girdiğimiz input(count) değerinin budget'i düşürmesi dolayısıyla Math.floor'un kalan budget değerine göre max değeri bulması.

    if (value && value > 0) {
      if (value > maxCount && budget >= 0) {
        setCount(maxCount);
      } else {
        setCount(value);
      }
    } else {
      setCount(0);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className=" overflow-hidden flex  justify-center">
         <img src={item.image} alt="img" className="object-contain h-[9rem]" />
      </div>
      <div className="px-5 py-1">
        <h1 className=" text-xl font-semibold tracking-tight text-black">{item.productName}</h1>
      </div>
      <div className="flex  items-center justify-center p-2">
         <h2 className="text-xl font-bold text-gray-900">{item.productPrice}$</h2>
      </div>
      <div className="flex  items-center justify-between p-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={buyButton}>
            buy
        </button>

        <input
          type="number"
          onChange={(e) => handleChange(e.target.value)}
          value={count}
          className=" w-10 ml-6"
          disabled
        />

        <button
          className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={sellButton}>
            sell
        </button>
      </div>
    </div>
  )
}

export default ProductCard




