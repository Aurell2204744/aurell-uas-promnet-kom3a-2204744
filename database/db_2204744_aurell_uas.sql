-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Jan 2024 pada 15.48
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2204744_aurell_uas`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pasien_puskesmas_aurell`
--

CREATE TABLE `pasien_puskesmas_aurell` (
  `id` int(11) NOT NULL,
  `nama` text DEFAULT NULL,
  `usia` int(11) DEFAULT NULL,
  `jenis_kelamin` text DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `deskripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pasien_puskesmas_aurell`
--

INSERT INTO `pasien_puskesmas_aurell` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(3, 'Satria', 20, 'Laki-Laki', 'Jl. Duluaja No. 5', 'Diare'),
(4, 'Reihan', 21, 'Laki-Laki', 'Jl. Kenangan No. 1', 'Darah Rendah'),
(5, 'Dafa', 24, 'Laki-Laki', 'Jl. Tanpanya No. 2', 'Asma'),
(6, 'suhaa', 16, 'perempuan', 'Jl. Kenangan no. 12', 'Demam'),
(7, 'suhaa', 17, 'Perempuan', 'Jl. Kenangan No.13', 'Flu'),
(8, 'Jasmine', 12, 'Perempuan', 'Jl. Kenangan No. 127', 'Demam');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pasien_puskesmas_aurell`
--
ALTER TABLE `pasien_puskesmas_aurell`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pasien_puskesmas_aurell`
--
ALTER TABLE `pasien_puskesmas_aurell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
