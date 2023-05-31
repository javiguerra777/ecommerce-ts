import { createSlice } from "@reduxjs/toolkit";

type State = {
  cart: any[];
};
const initialState = {
  cart: [],
} as State;
export const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      const foundItem = state.cart.find((item) => item.id === payload.id);
      if (foundItem) {
        foundItem.count += payload.count;
      } else {
        state.cart = [...state.cart, payload];
      }
    },
    removeProduct(state, { payload }) {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    decrementProduct(state, { payload }) {
      const foundItem = state.cart.find((item) => item.id === payload);
      if (foundItem.count > 1) {        
        foundItem.count -= 1
      }
    },
    incrementProduct(state, { payload }) {
      const foundItem = state.cart.find((item) => item.id === payload);
      foundItem.count += 1;
    }
  }
});

export const { addProduct, removeProduct, incrementProduct, decrementProduct } = cartSlice.actions;

export default cartSlice.reducer;