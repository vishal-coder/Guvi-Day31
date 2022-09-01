import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditTeacher() {
  const { id } = useParams();
  console.log("teacher id is", id);
  const { getTeacher, teacher } = useContext(AppContext);

  useEffect(() => getTeacher(id), []);
  console.log("student id student", teacher);

  return teacher ? <EditTeacherForm teacher={teacher} /> : "Loading...";
}

function EditTeacherForm({ teacher }) {
  const { addTeacher } = useContext(AppContext);
  const [name, setName] = useState(teacher.name);
  const [department, setDepartment] = useState(teacher.department);
  const [experience, setExperience] = useState(teacher.experience);
  const [address, setAddress] = useState(teacher.address);

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

  const handleEditTeacher = async (e) => {
    e.preventDefault();
    let editedTeacher = {
      name: name,
      department: department,
      experience: experience,
      address: address,
    };

    const response = await fetch(
      `https://631056a836e6a2a04eeb6c08.mockapi.io/Teacher/${teacher.id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedTeacher),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("add teacher response", response);
    if (response.status == 201 || response.status == 200) {
      alert("teacher edited successfully");
    }
  };
  return (
    <div>
      {teacher ? (
        <Form onSubmit={handleEditTeacher}>
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
      ) : (
        "Leading.."
      )}
    </div>
  );
}

export default EditTeacher;
