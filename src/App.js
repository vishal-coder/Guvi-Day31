import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudent from "./pages/AddStudent.js";
import ShowStudent from "./pages/ShowStudent.js";

import AddTeacher from "./pages/AddTeacher.js";
import ShowTeacher from "./pages/ShowTeacher.js";

import HeaderCom from "./pages/HeaderCom.js";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import EditStudent from "./pages/EditStudent";
import EditTeacher from "./pages/EditTeacher";

function App() {
  return (
    <>
      <div id="wrapper">
        <HeaderCom />

        <Routes>
          {/* <Route path="" element={<Dashboard />} /> */}
          <Route path="" element={<Dashboard />}>
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/showStudent" element={<ShowStudent />} />
            <Route path="/addTeacher" element={<AddTeacher />} />
            <Route path="/showTeacher" element={<ShowTeacher />} />
            <Route path="/editTeacher/:id" element={<EditTeacher />} />
            <Route path="/editStudent/:id" element={<EditStudent />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
