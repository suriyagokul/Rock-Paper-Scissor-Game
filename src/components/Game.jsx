import React, { useState, useEffect } from "react";
import Animation from "./Animation";
import successSound from "../assets/Clap.mp3"
import "../App.css";

export default function Game() {

  const [computerState, setComputerState] = useState("");
  const [userState, setUserState] = useState("");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const list = ["rock", "paper", "scissor"];

 

  const handleUserState = (e) => {
    setUserState(e.target.name);
    let computerSelected = list[Math.floor(Math.random() * list.length)];
    setComputerState(computerSelected);
    setWinner("");
    setGameOver(false);
  };

  useEffect(() => {
    if (userState === "" || computerState === "") {
      return; // Skip the first empty state or when computer state is not set
    }

    // Determine the winner
    let newWinner = "";
    if (userState === computerState) {
      newWinner = "Oh gosh!! It's a Tie";
    } else if (
      (userState === "rock" && computerState === "scissor") ||
      (userState === "paper" && computerState === "rock") ||
      (userState === "scissor" && computerState === "paper")
    ) {
      newWinner = "User";
      setUserScore((score) => score + 1);
    } else {
      newWinner = "Computer";
      setComputerScore((count) => count + 1);
    }

    setWinner(newWinner);
    setGameOver(true);
  }, [userState, computerState]);

  const resetGame = () => {
    setUserState("");
    setComputerState("");
    setWinner("");
    setGameOver(false);
  };

  return (
    <>
      
      <div style={{ display: "flex", marginBottom: "60px" }}>
        {userState === "" && !gameOver && (
          <button
            name="rock"
            onClick={handleUserState}
            style={{ border: "none", background: "transparent" }}
          >
            <img
              src="https://www.rpsgame.org/assets/img/rock.svg"
              alt="rock"
              name="rock"
              width={100}
              style={{ marginRight: "60px", cursor: "pointer" }}
            />
          </button>
        )}

       
        {userState === "" && !gameOver && (
          <button
            name="paper"
            onClick={handleUserState}
            style={{ border: "none", background: "transparent" }}
          >
            <img
              src="https://www.rpsgame.org/assets/img/paper.svg"
              alt="paper"
              name="paper"
              width={100}
              style={{ marginRight: "60px", cursor: "pointer" }}
            />
          </button>
        )}

        
        {userState === "" && !gameOver && (
          <button
            name="scissor"
            onClick={handleUserState}
            style={{ border: "none", background: "transparent" }}
          >
            <img
              src="https://www.rpsgame.org/assets/img/scissors.svg"
              alt="scissor"
              name="scissor"
              width={100}
              style={{ marginRight: "60px", cursor: "pointer" }}
            />
          </button>
        )}

            {gameOver && (
                <button onClick={resetGame}  id="reset" style={{cursor:"pointer", margin:"10px"}}>
                Play Again
                </button>
            )}

      </div>
     
     
      <h3>
        User Score {userScore} Opponent Score {computerScore}
      </h3>
      
      
      <div style={{display:"flex"}}>
        <h3 style={{marginRight: "20px"}}>Your Pick : {userState.toUpperCase()}</h3>
        <h3>Opponent Pick : {computerState.toUpperCase()}</h3>
      </div>
      
        {
            winner == "User" ? <h2>Congrats!! You Won the Game.. </h2> : winner == "Computer" ? <h2>Oops!! Opponent Won the Game.. </h2>
            : <h2>It's Tie</h2>
        }

        
       {winner == "User" && 
       ( 
       <>
            {/* <Animation/>   */}
            <audio 
                src={successSound}
                autoPlay
                onEnded={()=>{}}
            /> 
        </>
        )}

      
    </>
  );
}

