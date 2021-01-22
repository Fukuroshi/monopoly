import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import monopoly from './monopoly.js';
import ReactJsonPrint from 'react-json-print';
import playersList from './data/players.json';

const twoplayer = () => {  alert("Chosen 2 players.");  document.getElementById('players').style.display = 'none';}
const threeplayer = () => {  alert("Chosen 3 players."); document.getElementById('players').style.display = 'none'; }
const fourplayer = () => {  alert("Chosen 4 players.");  document.getElementById('players').style.display = 'none'; }

function App() {
  return (
    <div className="app">
      <nav>
        <DarkMode />
      </nav>
      <h1>Choose the amount of players</h1>
      <div id="players">
        <ButtonGroup>
            <Button variant="info" onClick={twoplayer}>2</Button>
            <Button variant="info" onClick={threeplayer}>3</Button>
            <Button variant="info" onClick={fourplayer}>4</Button>
        </ButtonGroup>
        {/* <monopoly /> */}
      </div>
    <ReactJsonPrint dataObject={playersList} />
    </div>
  );
}

export default App;
