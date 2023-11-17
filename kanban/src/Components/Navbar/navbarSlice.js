import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    filters : {
      'Grouping' : ['Status', 'User', 'Priority'],
      'Ordering' : {
        'Status' : ['Title', 'Priority'],
        'User' : ['Title', 'Priority'],
        'Priority' : ['Title'],
      },
    },
    selectedFilters : {
      'Grouping' : 'Status',
      'Ordering' : 'Priority',
    }
  }

const data = window.localStorage.getItem("KANBAN_USER_STATE")
if (data !== null) initialState = JSON.parse(data).filters

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
