import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

function BookList(props) {
  const datasource = props.datasource || null;
  if (datasource) {
    return datasource.map((mVal, index) => (
      <Card key={index}>
        <CardBody>
          <CardTitle>
            <h3>{mVal.title}</h3> - {mVal.author}
          </CardTitle>
          <CardText>
            <strong>Price: {mVal.price}</strong> <br />
            {mVal.description}
          </CardText>
        </CardBody>
      </Card>
    ));
  }
  return <div></div>;
}

export default BookList;
