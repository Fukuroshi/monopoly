import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";
// import monopoly from './monopoly.js';
import PlayerMenu from "./PlayerMenu/PlayerMenu";
import TileDisplay from "./TileDisplay/TileDisplay";
import { InputGroup,  Button, Alert} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {

  const [playerCount, setplayerCount] = React.useState(4);

const twoplayers = () => {
  setplayerCount(2);
  document.getElementById("playerselect").style.visibility = "hidden"; 
  document.getElementById("roller").style.visibility = "visible"; 
};
const threeplayers = () => {
  setplayerCount(3);
  document.getElementById("playerselect").style.visibility = "hidden"; 
  document.getElementById("roller").style.visibility = "visible"; 
};
const fourplayers = () => {
  setplayerCount(4);
  document.getElementById("playerselect").style.visibility = "hidden"; 
  document.getElementById("roller").style.visibility = "visible"; 
};

  const [current, setCurrent] = React.useState(0);

  const Roll = () => {
    document.getElementById("Tile").style.visibility = "visible";
    var number = 1+Math.floor(Math.random() * 6);
    alert("You've rolled "+number);
    if(number+current>39)
    {
      setCurrent((number+current)-39);
    } 
    else
    {
      setCurrent(number+current);
    }
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
          <PlayerMenu number={playerCount}/>
          <div id="Tile">
          <TileDisplay number={current}/>
          </div>
          <Button id="roller" onClick={Roll}>Roll</Button>
      </div>

  );
};

export default App;
