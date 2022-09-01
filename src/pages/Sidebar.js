import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="leftsidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link onClick={() => navigate("/addStudent")}>
          {" "}
          Add Student
        </Nav.Link>
        <Nav.Link eventKey="link-1" onClick={() => navigate("/showStudent")}>
          {" "}
          Show Student
        </Nav.Link>
        <Nav.Link eventKey="link-2" onClick={() => navigate("/addTeacher")}>
          {" "}
          Add Teacher
        </Nav.Link>
        <Nav.Link eventKey="link-2" onClick={() => navigate("/showTeacher")}>
          Show Teacher
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
