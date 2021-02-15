import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const PlayerCard = ({ id, bank, penalty, name }) => {
  return (
    <Card className="PlayerCard">
      <Card.Body>
        <Card.Title>{name}</Card.Title><br />
        <Card.Subtitle>Bank: {bank}</Card.Subtitle>
        <br />
        <Card.Subtitle>Jail turns: {penalty}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
