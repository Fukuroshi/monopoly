import React from "react";
import "../App.css";
import { Players, PlayerCount } from "../data/Players";
import PlayerCard from "../PlayerCard/PlayerCard";

const PlayerMenu = ({ number }) => {
  const PlayerDisplay = number ? PlayerCount(number) : Players;
  return (
    <div className="PlayerList">
      {PlayerDisplay.map((x) => (
        <PlayerCard
          id={x.id}
          bank={x.bank}
          penalty={x.penalty}
          name={x.name}
          tile={x.tile}
        />
      ))}
    </div>
  );
};

export default PlayerMenu;