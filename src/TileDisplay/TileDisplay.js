import React from "react";
import "../App.css";
import { Tile, currentTile } from "../data/Tiles";
import TileCard from "../TileCard/TileCard";

const TileDisplay = ({ number }) => {
  const TileProperties = number ? currentTile(number) : Tile;
  return (
    <div className="TileDisplay">
      {TileProperties.map((y) => (
        <TileCard
          id={y.id}
          name={y.name}
          owner={y.owner}
          value={y.value}
          cost={y.cost}
          buyable={y.buyable}
          bought={y.bought}
          group={y.group}
          extra={y.extra}
        />
      ))}
    </div>
  );
};

export default TileDisplay;