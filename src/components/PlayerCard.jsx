import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, img, statistics }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} height="250pxpx" />
        <Card.Footer>
          <Card.Title>{name} </Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PlayerCard;
