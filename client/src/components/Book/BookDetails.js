import React, { Component } from "react";
import { Row, Col, Card } from "reactstrap";
export class BookDetails extends Component {
  state = {
    title: "The Mooby Dick",
    author: "Carl Dennis M. Alingalan",
    price: "999.50",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo exercitationem atque porro molestias dolore dignissimos enim repellendus neque dolor.",
    id: null
  };

  componentDidMount() {
    const id = this.props.match.params.id || null;
    this.setState({ id });
  }
  render() {
    const { title, author, price, description, id } = this.state;
    if (!id) {
      return <div></div>;
    }
    return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <Row>
            <Col sm={12} md={12}>
              <Card body>
                <h1>
                  {title} - {id}
                </h1>
                <small className="text-muted">Author: {author}</small>
                <h5>Price: {price}</h5>
                <p>{description}</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BookDetails;
