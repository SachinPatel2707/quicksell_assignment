import { configureStore } from '@reduxjs/toolkit'
import boardReducer from '../Components/Board/boardSlice'

const store = configureStore({
    reducer : {
        board: boardReducer,
    }
})

export default store
