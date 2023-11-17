import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App () {

  const data = useSelector((state) => state.ticket)
  const dispatch = useDispatch()
  const print = () => {
    console.log(data)
  }

  return (
    <div className="App" onClick = {() => print()}>
      
    </div>
  )
}

export default App