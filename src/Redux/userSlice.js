import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  username: "",
  firstname: "",
  lastname: "",
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      //   console.log(action.payload);
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.fistname = action.payload.fistName;
      state.lastname = action.payload.lastName;
      state.image = action.payload.image;
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
