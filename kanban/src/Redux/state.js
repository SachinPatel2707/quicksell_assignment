import { configureStore } from '@reduxjs/toolkit'
import boardReducer from '../Components/Board/boardSlice'
import navbarReducer from '../Components/Navbar/navbarSlice'

const store = configureStore({
    reducer : {
        board: boardReducer,
        filters: navbarReducer,
    }
})

export default store
