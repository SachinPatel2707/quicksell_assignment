import { configureStore } from '@reduxjs/toolkit'
import boardReducer from '../Components/Board/boardSlice'
import navbarReducer from '../Components/Navbar/navbarSlice'

const store = configureStore({
    reducer : {
        board: boardReducer,
        filters: navbarReducer,
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('KANBAN_USER_STATE', JSON.stringify(state));
});

export default store
