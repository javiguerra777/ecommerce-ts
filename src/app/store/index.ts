import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from './productSlice';
import categoryApi from '../../common/api/CategoriesApi';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
