import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";
// import monopoly from './monopoly.js';
import PlayerMenu from "./PlayerMenu/PlayerMenu";
import TileDisplay from "./TileDisplay/TileDisplay";
// import PlayerSelect from "./PlayerSelect/PlayerSelect";


var number=2;

function App() {
  return (
    <div className="app">
      <nav>
         <center><h1>Monopoly</h1><DarkMode /></center>
      </nav>

        <div>
        {/* <h1>Choose the amount of Players</h1>
          <PlayerSelect /> */}
          <PlayerMenu number={number}/>
        </div>
        <div>
          <TileDisplay number={number}/>
        </div>
      </div>
  );
};

export default App;
