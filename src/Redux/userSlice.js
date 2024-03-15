import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  username: "",
  name: "",
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload);
      state.id = action.payload[0].id;
      state.username = action.payload[0].username;
      state.email = action.payload[0].email;
      state.name = action.payload[0].name;
      state.image = action.payload[0].image;
    },
    logoutRedux: (state, action) => {
      // console.log(action.payload);
      state.id = "";
      state.username = "";
      state.email = "";
      state.fistname = "";
      state.lastname = "";
      state.image = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
