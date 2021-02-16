import React from "react";
import "../App.css";
import { Card, ListGroup } from "react-bootstrap";

const TileCard = ({ id, name, owner, value, cost }) => {
  return (
    <Card className="TileCard">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Tile #{id}</Card.Subtitle>
        <ListGroup>
        <ListGroup.Item variant="dark">Owner ID: {owner}</ListGroup.Item>
        <ListGroup.Item variant="dark">Money obtained: {value}</ListGroup.Item>
        <ListGroup.Item variant="dark">Cost: {cost}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TileCard;
