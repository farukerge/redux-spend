import { createSlice } from "@reduxjs/toolkit";
import  productsJson  from '../features/productList.json'

const data = productsJson.products;


console.log(data);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    budget: 100000000000,
    initialMoney: 100000000000,
  },
  reducers: {
    basket: (state, action) => {
      const { count, id } = action.payload;

      const product = state.items.find((product) => product.id === id);
      product.count = count;
          
      let price = 0;
          
      state.items.map((product) => {
        price += Number(product.count) * Number(product.productPrice);
      });
      state.budget = Number(state.initialMoney) - Number(price); 
    },
  },
});

export const { basket } = productsSlice.actions;
export default productsSlice.reducer;

