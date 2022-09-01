import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppContext } from "./AppContext";

function AddTeacher() {
  const { addTeacher } = useContext(AppContext);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");

  const handlename = (event) => {
    setName(event.target.value);
  };
  const handledepartment = (event) => {
    setDepartment(event.target.value);
  };
  const handlexperience = (event) => {
    setExperience(event.target.value);
  };
  const handleaddress = (event) => {
    setAddress(event.target.value);
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    let newTeacher = {
      name: name,
      department: department,
      experience: experience,
      address: address,
    };

    const response = await addTeacher(newTeacher);
    console.log("add teacher response", response);
    if (response.status == 201 || response.status == 200) {
      alert("teacher added successfully");
    }
  };
  return (
    <div>
      <Form onSubmit={handleAddTeacher}>
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
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Class"
            onChange={handledepartment}
            value={department}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBranch">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Branch"
            onChange={handlexperience}
            value={experience}
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

export default AddTeacher;
