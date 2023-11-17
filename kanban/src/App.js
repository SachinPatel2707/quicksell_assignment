import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Board from './Components/Board/board'
import preloadState from './Components/Board/boardSlice'

function App () {

  const dispatch = useDispatch()

  return (
    <div className="App">
      <Navbar />
      <Board />
    </div>
  )
}

export default App