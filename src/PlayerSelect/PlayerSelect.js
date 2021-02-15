import React, { useState } from "react";
import "../App.css";
import { InputGroup,  Button } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const PlayerSelect = ({ number }) => {
  
  var number=4;

  return (
    <InputGroup className="mb-3">
        <ButtonGroup>
            <Button variant="info" onClick={number=2}>2</Button>
            <Button variant="info" onClick={number=3}>3</Button> 
            <Button variant="info" onClick={number=4}>4</Button>
        </ButtonGroup>
    </InputGroup>
  );
};

export default PlayerSelect;
