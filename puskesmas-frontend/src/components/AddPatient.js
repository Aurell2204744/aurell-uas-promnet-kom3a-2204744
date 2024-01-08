import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AddPatient.css";

const AddPatient = () => {
  const [patient, setPatient] = useState({
    nama: "",
    usia: 0,
    jenis_kelamin: "",
    alamat: "",
    deskripsi: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: name === "usia" ? parseInt(value, 10) : value });
  };

  const handleAddPatient = async () => {
    try {
      const response = await axios.post("http://localhost:9080/users", patient);
      console.log("New patient added");
      navigate("/list"); // Navigasi ke halaman '/list'
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div className="container">
      <h2>Tambah Pasien</h2>
      <form>
        <label>Nama:</label>
        <input type="text" name="nama" onChange={handleInputChange} />

        <label>Usia:</label>
        <input type="number" name="usia" onChange={handleInputChange} />

        <label>Jenis Kelamin:</label>
        <input type="text" name="jenis_kelamin" onChange={handleInputChange} />

        <label>Alamat:</label>
        <input type="text" name="alamat" onChange={handleInputChange} />

        <label>Deskripsi:</label>
        <textarea name="deskripsi" onChange={handleInputChange} />

        <button type="button" onClick={handleAddPatient}>
          Tambah Pasien
        </button>
      </form>

      <p>
        <Link to="/list" className="link-button">
          Daftar Pasien
        </Link>
        .
      </p>
    </div>
  );
};

export default AddPatient;
