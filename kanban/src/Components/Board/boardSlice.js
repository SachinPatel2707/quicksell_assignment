import { createSlice } from '@reduxjs/toolkit';
import { get } from '../../Services/http'

let initialState = {}
const data = window.localStorage.getItem("KANBAN_USER_STATE")
if (data !== null) initialState = JSON.parse(data).board
else initialState = await get("")

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      const id = action.payload
      const ticketToToggle = state.tickets.find((ticket) => ticket.id === id);
      if (ticketToToggle) {
        ticketToToggle.status = ticketToToggle.status === 'Done' ? 'Todo' : 'Done';
      }
    },
  },
})

export const { toggleStatus } = boardSlice.actions;
export default boardSlice.reducer;
