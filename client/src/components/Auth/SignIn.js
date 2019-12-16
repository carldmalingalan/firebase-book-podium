import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Row, Col, Card } from "reactstrap";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // const { email, password } = this.state;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <Row>
            <Col sm={12} md={{ size: 6, offset: 3 }}>
              <Card body>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={this.onChange}
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={this.onChange}
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="info" block>
                      Sign in
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

export default SignIn;
