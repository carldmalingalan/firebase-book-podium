import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Row, Col, Card } from "reactstrap";

export class Register extends Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    rePassword: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // const { fullname, email, password, rePassword } = this.state;
    // console.log(fullname, email, password, rePassword);
  };

  render() {
    const { email, password, rePassword, fullname } = this.state;
    return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <Row>
            <Col sm={12} md={{ size: 6, offset: 3 }}>
              <Card body>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Input
                      type="fullname"
                      name="fullname"
                      id="fullname"
                      value={fullname}
                      onChange={this.onChange}
                      placeholder="Fullname"
                    />
                  </FormGroup>
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
                    <Input
                      type="password"
                      name="rePassword"
                      id="rePassword"
                      value={rePassword}
                      onChange={this.onChange}
                      placeholder="Re-type Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="success" block>
                      Register
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

export default Register;
