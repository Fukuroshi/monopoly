import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";
// import monopoly from './monopoly.js';
import PlayerMenu from "./PlayerMenu/PlayerMenu";
import TileDisplay from "./TileDisplay/TileDisplay";
import { InputGroup,  Button} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Players } from "./data/Players";
import { Tile } from "./data/Tiles";

function App() {

  const [playerCount, setplayerCount] = React.useState(4);
  const [currentPlayer, setCurrentPlayer] = React.useState(0);
  const [turnNumber, setTurnNumber] = React.useState(1);
  const [current, setCurrent] = React.useState(1);

const twoplayers = () => {
  setplayerCount(2);
  document.getElementById("list").style.visibility = "visible";
  document.getElementById("Tile").style.visibility = "visible";
  document.getElementById("playerselect").style.visibility = "hidden"; 
  document.getElementById("roller").style.visibility = "visible"; 
  };
const threeplayers = () => {
  setplayerCount(3);
  document.getElementById("list").style.visibility = "visible";
  document.getElementById("Tile").style.visibility = "visible";
  document.getElementById("playerselect").style.visibility = "hidden"; 
  document.getElementById("roller").style.visibility = "visible"; 
};
const fourplayers = () => {
  setplayerCount(4);
  document.getElementById("list").style.visibility = "visible";
  document.getElementById("Tile").style.visibility = "visible";
  document.getElementById("playerselect").style.visibility = "hidden"; 
  document.getElementById("roller").style.visibility = "visible"; 
};

  const Roll = () => {
    document.getElementById("roller").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "visible";  
    var number = 1+Math.floor(Math.random() * 6);
    Players[currentPlayer].bank=Players[currentPlayer].bank+Tile[current].value;
    if(number+current>40)
    {
      setCurrent((number+current)-40);
      Players[currentPlayer].tile=(number+current)-40;
    } 
    else
    {
      setCurrent(number+current);
      Players[currentPlayer].tile=number+current;
    }
    alert("You've rolled "+number);
  }

  const endTurn = () => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("end").style.visibility = "hidden";
    if(turnNumber===2 && currentPlayer===playerCount-1)
    {
      alert("Game finished!");
      document.getElementById("Tile").style.visibility = "hidden";
      document.getElementById("playerselect").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("restart").style.visibility = "visible";
    }    
    else if(currentPlayer===playerCount-1)
    {
      setCurrentPlayer(0);
    setTurnNumber(turnNumber+1);
  }

    else
    {
    setCurrentPlayer(currentPlayer+1);}

    }

  const nextPlayer = () => {
    document.getElementById("roller").style.visibility = "visible";
    document.getElementById("next").style.visibility = "hidden";
    setCurrent(Players[currentPlayer].tile);
    alert("Turn of "+Players[currentPlayer].name);
  }
  const restartGame = () => {
    document.location.reload();
  }



  return (
    <div className="app">
      <nav>
         <center><h1>Monopoly</h1><DarkMode /></center>
      </nav>
        <div id="playerselect">
          <h2>Choose the amount of Players</h2>
          <InputGroup>
            <ButtonGroup>
              <Button variant="info" onClick={twoplayers}>2</Button>
              <Button variant="info" onClick={threeplayers}>3</Button> 
              <Button variant="info" onClick={fourplayers}>4</Button>
            </ButtonGroup>
          </InputGroup>
          </div>
          <div id="list">
          <PlayerMenu number={playerCount}/>
          </div>
          <div id="Tile">
            <h1>{Players[currentPlayer].name}, turn number: {turnNumber}</h1>
          <TileDisplay number={current}/>
          </div>
          <Button id="roller" onClick={Roll}>Roll</Button>
          <Button id="end" onClick={endTurn}>End turn</Button>
          <Button id="next" onClick={nextPlayer}>Next player</Button>
          <Button id="restart" onClick={restartGame}>Restart</Button>
      </div>

  );
};

export default App;
