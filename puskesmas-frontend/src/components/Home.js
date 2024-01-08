import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Puskesmas Harapan</h1>
      <h2>Bersama, kita wujudkan dunia yang sehat!</h2>
      <div className="button-container">
        <Link to="/add" className="button">
          Tambah Pasien
        </Link>
        <Link to="/list" className="button">
          Daftar Pasien
        </Link>
      </div>
    </div>
  );
};

export default Home;
