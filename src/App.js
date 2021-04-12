import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";
import PlayerMenu from "./PlayerMenu/PlayerMenu";
import TileDisplay from "./TileDisplay/TileDisplay";
import { InputGroup,  Button} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Players } from "./data/Players";
import { Tile } from "./data/Tiles";
import swal from "sweetalert";

function App() {

  const [playerCount, setplayerCount] = React.useState(4);
  const [currentPlayer, setCurrentPlayer] = React.useState(0);
  const [turnNumber, setTurnNumber] = React.useState(1);
  const [current, setCurrent] = React.useState(1);

const twoplayers = () => {
  setplayerCount(2);
  document.getElementById("game").style.visibility = "visible";
  document.getElementById("playerselect").style.visibility = "hidden"; 
  };
const threeplayers = () => {
  setplayerCount(3);
  document.getElementById("game").style.visibility = "visible";
  document.getElementById("playerselect").style.visibility = "hidden"; 
};
const fourplayers = () => {
  setplayerCount(4);
  document.getElementById("game").style.visibility = "visible";
  document.getElementById("playerselect").style.visibility = "hidden"; 
};

  const Roll = () => {
    document.getElementById("roller").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "visible";  
    var number = 1+Math.floor(Math.random() * 6);
    if((Tile[current].owner!==Players[currentPlayer].id) || (Tile[current].id===1))
    {
      Players[currentPlayer].bank=Players[currentPlayer].bank-Tile[current].value;
    }
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
    swal({title: "You've rolled "+number});  
    document.getElementById("buyTile").style.visibility = "visible";
    }

  const Buy = () => {
    if((Tile[current-1].buyable===false) || (Tile[current-1].bought===true))      
    {
      swal({title: "You can't buy this tile."});
      document.getElementById("buyTile").style.visibility = "hidden";
    }
    else if(Players[currentPlayer].bank>Tile[current-1].cost)
    {
      Tile[current-1].owner=currentPlayer;
      Tile[current-1].bought=true;      
      Players[currentPlayer].bank=Players[currentPlayer].bank-Tile[current-1].cost;
      document.getElementById("buyTile").style.visibility = "hidden";

      swal({title: "You've bought tile #"+Tile[current-1].id+" - "+Tile[current-1].name});
    }
    else
    {
      swal({title: "Insufficient money."});
      document.getElementById("buyTile").style.visibility = "hidden";
    }
  }

  const endTurn = () => {
    document.getElementById("end").style.visibility = "hidden";
    if(turnNumber===3 && currentPlayer===playerCount-1)
    {
      var winner=0
      var winnerName;
      
      for(var x=0; x<=currentPlayer; x++)
      {
        
        if(Players[x].bank>winner)
        {
          winner=Players[x].bank;
          winnerName=Players[x].name;
        }
      };
      document.getElementById("game").style.visibility = "hidden";
      document.getElementById("restart").style.visibility = "visible";
      swal("Game finished, "+winnerName+" wins!", "With "+winner+" in the bank!");
    }    
    else if(currentPlayer===playerCount-1)
    {
      switch(Tile[current-1].extra)
      {
        case 1:
          Players[currentPlayer].bank=Players[currentPlayer].bank+2000;
          break;
        case 2:
          Players[currentPlayer].tile=11;
          Players[currentPlayer].penalty=2;
          swal({title:"You've landed in jail!"});  
          break;
        default:
          break;
      }
      setCurrentPlayer(0);
      setTurnNumber(turnNumber+1);
      document.getElementById("next").style.visibility = "visible";
    }
    else
    {
      switch(Tile[current-1].extra)
      {
        case 1:
          Players[currentPlayer].bank=Players[currentPlayer].bank+2000;
          break;
        case 2:
          Players[currentPlayer].tile=11;
          Players[currentPlayer].penalty=2;
          swal({title: "You've landed in jail!"});  
          break;
        default:
          break;
      }
      setCurrentPlayer(currentPlayer+1);
      document.getElementById("next").style.visibility = "visible";
    }
    document.getElementById("buyTile").style.visibility = "hidden";
  }

  const nextPlayer = () => {
    if(Players[currentPlayer].penalty===0)
    {
      document.getElementById("roller").style.visibility = "visible";
      document.getElementById("next").style.visibility = "hidden";
      setCurrent(Players[currentPlayer].tile);
      swal(Players[currentPlayer].name, "Your turn!");
    }
    else
    {
      Players[currentPlayer].penalty--;
      document.getElementById("end").style.visibility = "visible";
      document.getElementById("next").style.visibility = "hidden";
      swal(Players[currentPlayer].name+"'s turn was skipped, ", Players[currentPlayer].penalty+" jail turns left.");
    }
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
    <div id="game">
      <div>
        <PlayerMenu number={playerCount}/>
      </div>
      <div id="currentPlayerText">
        <h1>{Players[currentPlayer].name}, turn number: {turnNumber}</h1>
      </div>
      <div id="Tile">
        <TileDisplay number={current}/>
        <Button id="buyTile" onClick={Buy}>Buy</Button>
      </div>
        <Button id="roller" onClick={Roll}>Roll</Button>
        <Button id="end" onClick={endTurn}>End turn</Button>
        <Button id="next" onClick={nextPlayer}>Next player</Button>
    </div>
    <Button id="restart" onClick={restartGame}>Restart</Button>
  </div>

  );
};

export default App;