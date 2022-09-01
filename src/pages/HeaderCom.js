import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { MortarboardFill } from "react-bootstrap-icons";

function HeaderCom() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="text-center">
        <Container>
          <Navbar.Brand href="#">
            {" "}
            <MortarboardFill color="white" size={56} /> Student and Teacher
            Management System
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
