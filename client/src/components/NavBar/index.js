import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserState, setUserState] = useState("sin");

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">
          Book Podium
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {isUserState === "sin" ? <SignedIn /> : <SignedOut />}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Index;
