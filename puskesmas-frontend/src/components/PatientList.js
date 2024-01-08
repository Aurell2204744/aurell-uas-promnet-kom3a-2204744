// src/components/PatientList.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/PatientList.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:9080/users')
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDeletePatient = async (id) => {
    try {
      const response = await fetch(`http://localhost:9080/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Pasien dengan ID ${id} berhasil dihapus`);
        // Refresh daftar pasien setelah penghapusan
        setPatients(patients.filter(patient => patient.id !== id));
      } else {
        console.error(`Gagal menghapus pasien dengan ID ${id}`);
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleUpdatePatient = (id) => {
    // Navigasi ke halaman pembaruan pasien
    Navigate(`/update/${id}`);
  };

  return (
    <div className="container">
      <h2>Daftar Pasien</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Usia</th>
            <th>Jenis Kelamin</th>
            <th>Hapus</th>
            <th>Ubah</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.nama}</td>
              <td>{patient.usia}</td>
              <td>{patient.jenis_kelamin}</td>
              <td>
                <button onClick={() => handleDeletePatient(patient.id)}>Hapus</button>
              </td>
              <td>
                <button onClick={() => handleUpdatePatient(patient.id)}>Ubah</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
