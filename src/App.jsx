import { GameHeader } from "./components/GameHeader"

const cardValues = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]

function App() {

  return (
  <div className="app">
    <GameHeader score = {2} moves = {5} />  
  </div>
)}

export default App
