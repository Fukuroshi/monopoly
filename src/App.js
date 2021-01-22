import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const twoplayer = () => {  alert("Chosen 2 players.");  };
const threeplayer = () => {  alert("Chosen 3 players."); }
const fourplayer = () => {  alert("Chosen 4 players.");  }

function App() {
  return (
    <div className="app">
      <nav>
        <DarkMode />
      </nav>
      <h1>Choose the amount of players</h1>
      <ButtonGroup>
       <Button variant="info" onClick={twoplayer}>2</Button>
       <Button variant="info" onClick={threeplayer}>3</Button>
       <Button variant="info" onClick={fourplayer}>4</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
