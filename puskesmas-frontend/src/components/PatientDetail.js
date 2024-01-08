// src/components/PatientDetail.js
import React, { useState } from "react";
import axios from "axios";

const PatientDetail = () => {
  const [patientId, setPatientId] = useState("");
  const [patient, setPatient] = useState(null);

  const handleInputChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`http://localhost:9080/users/${patientId}`)
      .then((response) => {
        console.log("Response data:", response.data);
        setPatient(response.data);
      })
      .catch((error) => console.error("Error fetching patient detail:", error));
  };

  console.log("Patient ID:", patientId);
  console.log("Patient Data:", patient);

  return (
    <div>
      <h2>Detail Pasien</h2>
      <input type="text" placeholder="ID Pasien" onChange={handleInputChange} />
      <button type="button" onClick={handleSearch}>
        Cari Pasien
      </button>
      {patient && (
        <div>
          <p>ID: {patient.id}</p>
          <p>Nama: {patient.nama}</p>
          <p>Usia: {patient.usia}</p>
          <p>Jenis Kelamin: {patient.jenis_kelamin}</p>
          <p>Alamat: {patient.alamat}</p>
          <p>Deskripsi: {patient.deskripsi}</p>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;
