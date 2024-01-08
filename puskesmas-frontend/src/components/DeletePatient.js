import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DeletePatient = () => {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState('');

  const handleDeletePatient = async () => {
    try {
      const response = await fetch(`http://localhost:9080/users/${patientId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Pasien berhasil dihapus');
        navigate('/');
      } else {
        console.error('Gagal menghapus pasien');
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div>
      <h2>Hapus Pasien</h2>
      <label>Masukkan ID Pasien:</label>
      <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} />

      <button type="button" onClick={handleDeletePatient}>
        Hapus Pasien
      </button>

      <p>
        Lihat <Link to="/list">Daftar Pasien</Link>.
      </p>
    </div>
  );
};

export default DeletePatient;
