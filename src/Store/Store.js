import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Slice/StoreSlice'
const Store = configureStore({
  reducer: {
    user:UserSlice
  },
});

export default Store;