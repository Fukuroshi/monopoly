import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const TileCard = ({ id, name, owner, value, cost }) => {
  return (
    <Card className="TileCard">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Tile #{id}</Card.Subtitle>
        <br />
        <Card.Subtitle>Owner ID: {owner}</Card.Subtitle>
        <br />
        <Card.Subtitle>Money obtained: {value}</Card.Subtitle>
        <Card.Subtitle>Cost: {cost}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default TileCard;
