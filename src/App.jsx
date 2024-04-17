import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [currentBestScore, setCurrentBestScore] = useState(0)
  return (
    <>
      <div className="h-screen flex flex-col">   
        <Header currentScore={currentScore} currentBestScore={currentBestScore}/>
        <Body currentScore={currentScore} setCurrentScore={setCurrentScore} currentBestScore={currentBestScore} setCurrentBestScore={setCurrentBestScore}/>
      </div>
    </>
  )
}
export default App;
