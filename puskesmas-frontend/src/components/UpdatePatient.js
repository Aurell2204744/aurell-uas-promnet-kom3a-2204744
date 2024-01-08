import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/UpdatePatient.css';

const UpdatePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    nama: '',
    usia: 0,
    jenis_kelamin: '',
    alamat: '',
    deskripsi: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9080/users/${id}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: name === 'usia' ? parseInt(value, 10) : value });
  };

  const handleUpdatePatient = async () => {
    try {
      const response = await fetch(`http://localhost:9080/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
      });

      if (response.ok) {
        console.log('Pasien berhasil diperbarui');
        navigate('/');
      } else {
        console.error('Gagal memperbarui pasien');
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <div>
      <h2>Ubah Detail Pasien</h2>
      <form>
        <label>Nama:</label>
        <input type="text" name="nama" value={patient.nama} onChange={handleInputChange} />

        <label>Usia:</label>
        <input type="number" name="usia" value={patient.usia || ''} onChange={handleInputChange} />

        <label>Jenis Kelamin:</label>
        <input type="text" name="jenis_kelamin" value={patient.jenis_kelamin} onChange={handleInputChange} />

        <label>Alamat:</label>
        <input type="text" name="alamat" value={patient.alamat} onChange={handleInputChange} />

        <label>Deskripsi:</label>
        <textarea name="deskripsi" value={patient.deskripsi} onChange={handleInputChange} />

        <button type="button" onClick={handleUpdatePatient}>
          Ubah Pasien
        </button>
      </form>
    </div>
  );
};

export default UpdatePatient;
