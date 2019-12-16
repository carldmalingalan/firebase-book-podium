import React, { Fragment } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function SignedOut() {
  return (
    <Fragment>
      <Nav className="mr-auto" navbar></Nav>
      <Nav navbar>
        <NavItem>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </NavItem>
      </Nav>
    </Fragment>
  );
}

export default SignedOut;
