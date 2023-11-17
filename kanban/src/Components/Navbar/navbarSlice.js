import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters : {
      'Grouping' : ['status', 'user', 'priority'],
      'Ordering' : {
        'status' : ['title', 'priority'],
        'user' : ['title', 'priority'],
        'priority' : ['title'],
      },
    },
    selectedFilters : {
      'Grouping' : '',
      'Ordering' : '',
    }
  }

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    updateGrouping: (state, action) => {
      state.selectedFilters.Grouping = action.payload
    },
    updateOrdering: (state, action) => {
      state.selectedFilters.Ordering = action.payload
    }
  },
})

export const { updateGrouping, updateOrdering } = navbarSlice.actions;
export default navbarSlice.reducer;
