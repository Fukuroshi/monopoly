import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DarkMode from "./utilities/darkmode/DarkMode";
// import Button from 'react-bootstrap/Button';
import players from './data/players.json';
/*import tiles from './data/tiles.json';*/

// eslint-disable-next-line 
var data = JSON.parse(players);

function monopoly() {
    return (
        <script>
           document.open();
           document.print(data);
           document.close();
        </script>
    );
  }
  
  export default monopoly;
  