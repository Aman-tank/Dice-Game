import { useState } from "react";
import Home from "./components/Home";
import GamePlay from "./components/GamePlay";


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  function startGame(){
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <Home props ={startGame}/>}
    {/* <Home/> */}
    </>
  )
}

export default App
