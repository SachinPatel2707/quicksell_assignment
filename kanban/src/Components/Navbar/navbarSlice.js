import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters : {

    },
  }

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    
  },
})

// export const { add } = navbarSlice.actions;
export default navbarSlice.reducer;
