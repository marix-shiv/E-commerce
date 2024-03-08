import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cartItem: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductRedux: (state, action) => {
      state.allProducts = [...action.payload];
    },
    addCartRedux: (state, action) => {
      const check = state.cartItem.some((ele) => {
        return ele.id === action.payload.id;
      });
      if (!check) {
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
        console.log(state.cartItem);
      } else {
        alert("Item already added");
      }
    },
    remCartItem: (state, action) => {
      const index = state.cartItem.findIndex(
        (ele) => ele.id === action.payload
      );
      state.cartItem.splice(index, 1);
    },
    incQtyRedux: (state, action) => {
      const index = state.cartItem.findIndex(
        (ele) => ele.id === action.payload
      );
      let qty = state.cartItem[index].qty;
      const totQty = ++qty;
      state.cartItem[index].qty = totQty;
      state.cartItem[index].total = state.cartItem[index].price*totQty
    },
    decQtyRedux: (state, action) => {
      const index = state.cartItem.findIndex(
        (ele) => ele.id === action.payload
      );
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const totQty = --qty;
        state.cartItem[index].qty = totQty;
        state.cartItem[index].total = state.cartItem[index].price*totQty
      }
    },
  },
});

export const {
  addProductRedux,
  addCartRedux,
  remCartItem,
  incQtyRedux,
  decQtyRedux,
} = productSlice.actions;
export default productSlice.reducer;
