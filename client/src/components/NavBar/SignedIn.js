import React, { Fragment } from "react";
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

function SignedIn() {
  return (
    <Fragment>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/book/create">
            Create a Book Info
          </Link>
        </NavItem>
      </Nav>
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          Carl Dennis Alingalan
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Fragment>
  );
}

export default SignedIn;
