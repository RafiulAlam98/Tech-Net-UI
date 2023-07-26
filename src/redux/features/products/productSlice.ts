import { createSlice } from '@reduxjs/toolkit';

type IProduct = {
  status: boolean;
  priceRange: number;
};
const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    priceToggle: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});
export const { toggleStatus, priceToggle } = productSlice.actions;

export default productSlice.reducer;
