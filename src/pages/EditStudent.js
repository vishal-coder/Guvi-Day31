import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function EditStudent() {
  const { id } = useParams();
  console.log("student id is", id);
  const { getStudent, student } = useContext(AppContext);

  useEffect(() => getStudent(id), []);
  console.log("student id student", student);

  return student ? <EditStudentForm student={student} /> : "Loading...";
}
function EditStudentForm({ student }) {
  console.log("edit form studetn is", student);
  const [name, setName] = useState(student.name);
  const [classname, setClassName] = useState(student.classname);
  const [branch, setBranch] = useState(student.branch);
  const [address, setAddress] = useState(student.address);

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

  const handleEditStudent = async (e) => {
    e.preventDefault();
    let editedStudent = {
      name: name,
      classname: classname,
      branch: branch,
      address: address,
    };

    const response = await fetch(
      `https://631056a836e6a2a04eeb6c08.mockapi.io/student/${student.id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedStudent),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("add student response", response);
    if (response.status == 201 || response.status == 200) {
      alert("student edited successfully");
    }
  };
  return (
    <div>
      {student ? (
        <Form onSubmit={handleEditStudent}>
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
      ) : (
        "loading"
      )}
    </div>
  );
}

export default EditStudent;
