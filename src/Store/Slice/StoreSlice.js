import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
        state.push(action.payload)
    },
    deleteUser: (state, action) => {
      state.splice(action.payload,1)
      
    },
    clearUser: (state, action) => {
      state.splice(action.payload)
    },
  },
});

export default UserSlice.reducer;
export const { addUser, deleteUser, clearUser } = UserSlice.actions;
