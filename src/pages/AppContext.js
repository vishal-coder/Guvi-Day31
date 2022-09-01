import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppContext = createContext();

const Appstate = ({ children }) => {
  const navigate = useNavigate();
  const [numOfTeacher, setNumOfTeacher] = useState(null);
  const [numOfStudent, setNumOfStudent] = useState(null);
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState(null);
  const [teacherstList, setTeachersList] = useState([]);
  const [teacher, setTeacher] = useState(null);

  const getTeacher = (teacherId) => {
    fetch(`https://631056a836e6a2a04eeb6c08.mockapi.io/Teacher/${teacherId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setTeacher(mv));
  };

  const handleDeleteTeacher = (deletionId) => {
    fetch(`https://631056a836e6a2a04eeb6c08.mockapi.io/Teacher/${deletionId}`, {
      method: "DELETE",
    }).then(() => getTeacherDetails());
  };
  const getTeacherDetails = () => {
    fetch("https://631056a836e6a2a04eeb6c08.mockapi.io/Teacher", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setTeachersList(mvs));
  };
  const getStudent = (studentId) => {
    fetch(`https://631056a836e6a2a04eeb6c08.mockapi.io/student/${studentId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setStudent(mv));
  };
  const getTeachers = () => {
    fetch("https://631056a836e6a2a04eeb6c08.mockapi.io/Teacher", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => {
        setNumOfTeacher(mvs.length);
      });
  };
  const getStudents = () => {
    fetch(`https://631056a836e6a2a04eeb6c08.mockapi.io/student/`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setNumOfStudent(mv.length));
  };

  const addStudent = async (newStudent) => {
    const response = await fetch(
      "https://631056a836e6a2a04eeb6c08.mockapi.io/student",
      {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  };

  const addTeacher = async (newTeacher) => {
    const response = await fetch(
      "https://631056a836e6a2a04eeb6c08.mockapi.io/Teacher",
      {
        method: "POST",
        body: JSON.stringify(newTeacher),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  };
  const getStudentDetails = () => {
    fetch("https://631056a836e6a2a04eeb6c08.mockapi.io/student", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setStudentList(mvs));
  };
  const handleDeleteStudent = (deletionId) => {
    fetch(`https://631056a836e6a2a04eeb6c08.mockapi.io/student/${deletionId}`, {
      method: "DELETE",
    }).then(() => getStudentDetails());
  };

  return (
    <AppContext.Provider
      value={{
        addStudent,
        addTeacher,
        getTeachers,
        getStudents,
        numOfTeacher,
        numOfStudent,
        studentList,
        getStudentDetails,
        handleDeleteStudent,
        getStudent,
        student,
        teacherstList,
        handleDeleteTeacher,
        getTeacherDetails,
        getTeacher,
        teacher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { Appstate, AppContext };
