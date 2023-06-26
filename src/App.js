import Game  from './components/Game';
import './App.css';
import { useState } from 'react';

function App() {

  const [showGame, setShowGame] = useState(false);

  const handleGame = () => {
    setShowGame(true);
  }

  return (
    <div className="App">
      <header className="App-header">
      {
        showGame? 
          ( <Game/> ) 
      : (
          <>
            <h1>Rock Paper Scissor</h1>
            <button onClick={handleGame} id="getstarted">Get Started</button>
          </>
      )}
     
      </header>
    </div>
  );
}

export default App;
