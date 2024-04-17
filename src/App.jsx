import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <>
      <div className="h-screen flex flex-col">   
        <Header score={score} bestScore={bestScore}/>
        <Body score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
      </div>
    </>
  )
}
export default App;
