import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const PlayerCard = ({ id, bank, penalty, name, tile }) => {
  return (
    <Card className="PlayerCard">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Bank: {bank}</Card.Subtitle>
        <Card.Footer>Tile: {tile}<br/>Jail turns: {penalty}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
