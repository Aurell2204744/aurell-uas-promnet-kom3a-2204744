import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";
import PatientDetail from "./components/PatientDetail";
import UpdatePatient from "./components/UpdatePatient";
import DeletePatient from "./components/DeletePatient";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPatient />} />
          <Route path="/list" element={<PatientList />} />
          <Route path="/detail" element={<PatientDetail />} />
          <Route path="/update/:id" element={<UpdatePatient />} />
          <Route path="/delete" element={<DeletePatient />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
