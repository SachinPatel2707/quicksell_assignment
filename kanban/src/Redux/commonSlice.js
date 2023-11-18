import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  priorities: [
    {
      id : '0',
      label: 'No Priority',
      color: '#919191',
    },
    {
      id : '1',
      label: 'Low',
      color: '#30b76a'
    },
    {
      id : '2',
      label: 'Medium',
      color: '#ffcc00',
    },
    {
      id : '3',
      label: 'High',
      color: '#f9804d',
    },
    {
      id : '4',
      label: 'Urgent',
      color: '#f42',
    },
  ]
}

let data = window.localStorage.getItem("KANBAN_USER_STATE")
data = JSON.parse(data)
if (data != null && data.common != null) initialState = data.common

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    
  },
})

export const { preloadState } = commonSlice.actions;
export default commonSlice.reducer;
