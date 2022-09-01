import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppContext } from "./AppContext";

function AddStudent() {
  const { addStudent } = useContext(AppContext);
  const [name, setName] = useState(null);
  const [classname, setClassName] = useState(null);
  const [branch, setBranch] = useState(null);
  const [address, setAddress] = useState(null);

  const handlename = (event) => {
    setName(event.target.value);
  };
  const handleclassname = (event) => {
    setClassName(event.target.value);
  };
  const handlebranch = (event) => {
    setBranch(event.target.value);
  };
  const handleaddress = (event) => {
    setAddress(event.target.value);
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    let newStudent = {
      name: name,
      classname: classname,
      branch: branch,
      address: address,
    };

    const response = await addStudent(newStudent);
    if (response.status == 201 || response.status == 200) {
      alert("student added successfully");
    }
  };
  return (
    <div>
      <Form onSubmit={handleAddStudent}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handlename}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicClass">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Class"
            onChange={handleclassname}
            value={classname}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBranch">
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Branch"
            onChange={handlebranch}
            value={branch}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            onChange={handleaddress}
            value={address}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddStudent;
