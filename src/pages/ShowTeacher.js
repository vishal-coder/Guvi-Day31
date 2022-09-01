import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import Table from "react-bootstrap/Table";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import { Navigate, useNavigate } from "react-router-dom";

function ShowTeacher() {
  const { teacherstList, getTeacherDetails, handleDeleteTeacher } =
    useContext(AppContext);
  const navigate = useNavigate();

  console.log("teacherlis is", teacherstList);
  useEffect(() => getTeacherDetails(), []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Experience in Years</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {teacherstList.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.department}</td>
              <td>{teacher.experience}</td>
              <td>{teacher.address}</td>
              <td>
                <PencilFill
                  color="blue"
                  className="additionalIcon"
                  onClick={() => navigate(`/editTeacher/${teacher.id}`)}
                />
              </td>
              <td>
                <TrashFill
                  color="red"
                  className="additionalIcon"
                  onClick={() => handleDeleteTeacher(teacher.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowTeacher;
