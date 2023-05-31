import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://fakestoreapi.com';
export const getProduct = createAsyncThunk(
  'product/fetchById',
  async (id: number | string) => {
    const { data } = await axios.get(`${url}/products/${id}`);
    return {data, id};
  }
)
interface Product {
  title: string,
  image: string,
  description: string,
  rating: {
    rate: string,
    count: string,
  },
  price: string
}
type State = {
  activeId: number | string;
  product: Product
  pending: boolean;
  error: boolean;
};
const initialState = {
  activeId: 0,
  product: {},
  pending: false,
  error: false,
} as State;

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.activeId = payload.id;
      state.product = payload.data;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.pending = false;
      state.error = true;
      state.activeId = 0;
    })
  }
});

export default ProductSlice.reducer;