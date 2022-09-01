import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import Table from "react-bootstrap/Table";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function ShowStudent() {
  const { studentList, getStudentDetails, handleDeleteStudent } =
    useContext(AppContext);
  const navigate = useNavigate();

  console.log("studentList is", studentList);
  useEffect(() => getStudentDetails(), []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Branch</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.classname}</td>
              <td>{student.branch}</td>
              <td>{student.address}</td>
              <td>
                <PencilFill
                  color="blue"
                  className="additionalIcon"
                  onClick={() => navigate(`/editStudent/${student.id}`)}
                />
              </td>
              <td>
                <TrashFill
                  className="additionalIcon"
                  color="red"
                  onClick={() => handleDeleteStudent(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowStudent;
