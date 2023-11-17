import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Board from './Components/Board/board'

function App () {

  const data = useSelector((state) => state.board)
  const dispatch = useDispatch()
  const print = () => {
    console.log(data)
  }

  return (
    <div className="App" onClick = {() => print()}>
      <Navbar />
      <Board />
    </div>
  )
}

export default App