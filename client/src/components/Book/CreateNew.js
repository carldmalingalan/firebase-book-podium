import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Row, Col, Card } from "reactstrap";

export class CreateNew extends Component {
  state = {
    title: "",
    author: "",
    price: "",
    description: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // const { title, author, price, description } = this.state;
    // console.log(title, author, price, description);
  };

  render() {
    const { title, author, price, description } = this.state;
    return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <Row>
            <Col sm={12} md={{ size: 8, offset: 2 }}>
              <Card body>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={this.onChange}
                      placeholder="Title"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="author"
                      id="author"
                      value={author}
                      onChange={this.onChange}
                      placeholder="Author"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="price"
                      id="price"
                      value={price}
                      onChange={this.onChange}
                      placeholder="Price"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      value={description}
                      onChange={this.onChange}
                      placeholder="Description"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" block>
                      Create
                    </Button>
                  </FormGroup>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CreateNew;
