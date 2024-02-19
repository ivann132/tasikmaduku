import React, { useState } from "react";
import Swal from "sweetalert2";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Add = ({ anak, setAnak, setIsAdding, getAnak }) => {
  const [nik, setNIK] = useState("");
  const [kk, setnoKK] = useState("");
  const [namaAnak, setNamaAnak] = useState("");
  const [gender, setGender] = useState("");
  const [tempatLahir, setTempatLahirAnak] = useState("");
  const [tanggalLahir, setTanggalLahirAnak] = useState("");
  const [umur, setUmurAnak] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tinggi, setTinggiBadan] = useState("");
  const [berat, setBeratBadan] = useState("");
  const [lingkarKepala, setLingkarKepala] = useState("");
  const [lingkarLengan, setLingkarLengan] = useState("");
  const [namaAyah, setNamaAyah] = useState("");
  const [pekerjaanAyah, setPekerjaanAyah] = useState("");
  const [riwayatPenyakitAyah, setRiwayatPenyakitAyah] = useState("");
  const [namaIbu, setNamaIbu] = useState("");
  const [pekerjaanIbu, setPekerjaanIbu] = useState("");
  const [riwayatPenyakitIbu, setRiwayatPenyakitIbu] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!nik ||
      !kk ||
      !namaAnak ||
      !gender ||
      !tempatLahir ||
      !tanggalLahir ||
      !umur ||
      !alamat ||
      !tinggi ||
      !berat ||
      !lingkarKepala ||
      !lingkarLengan ||
      !namaAyah ||
      !pekerjaanAyah ||
      !riwayatPenyakitAyah ||
      !namaIbu ||
      !pekerjaanIbu ||
      !riwayatPenyakitIbu) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newAnak = {
      nik,
      kk,
      namaAnak,
      gender,
      tempatLahir,
      tanggalLahir,
      umur,
      alamat,
      tinggi,
      berat,
      lingkarKepala,
      lingkarLengan,
      namaAyah,
      pekerjaanAyah,
      riwayatPenyakitAyah,
      namaIbu,
      pekerjaanIbu,
      riwayatPenyakitIbu
    };

    anak.push(newAnak);

    try {
      await addDoc(collection(db, "data_anak"), {
        ...newAnak,
      });
    } catch (error) {
      console.log(error);
    }

    setAnak(anak);
    setIsAdding(false);
    getAnak();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${nik} ${namaAnak}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <div class="main_content">
        <div class="header">
          <i class="fas fa-user-tie mr-2"></i>Data Anak
        </div>
        <div class="container">
          <div class="card p-3 m-3">
            <div class="card-header">
              <h2>Add Data Anak</h2>
            </div>
            <div class="card-body">
              <form onSubmit={handleAdd}>
                <div class="form-group">
                  <label for="nik">NIK</label>
                  <input type="text" class="form-control" id="nik" name="nik" value={nik} onChange={(e) => setNIK(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="no_kk">No KK</label>
                  <input type="text" class="form-control" id="no_kk" name="no_kk" value={kk} onChange={(e) => setnoKK(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="nama">Nama Anak</label>
                  <input type="text" class="form-control" id="nama" name="nama" value={namaAnak} onChange={(e) => setNamaAnak(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="gender">Gender</label>
                  <input type="text" class="form-control" id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="tempat_lahir">Tempat Tanggal Lahir</label>
                  <input type="text" class="form-control" id="tempat_lahir" name="tempat_lahir" value={tempatLahir} onChange={(e) => setTempatLahirAnak(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="tanggal_lahir">Tanggal Lahir Anak</label>
                  <input type="text" class="form-control" id="tanggal_lahir" name="tanggal_lahir" value={tanggalLahir} onChange={(e) => setTanggalLahirAnak(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="umur">Umur Anak</label>
                  <input type="text" class="form-control" id="umur" name="umur" value={umur} onChange={(e) => setUmurAnak(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="alamat">Alamat</label>
                  <input type="text" class="form-control" id="alamat" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="tinggi_badan">Tinggi badan</label>
                  <input type="text" class="form-control" id="tinggi_badan" name="tinggi_badan" value={tinggi} onChange={(e) => setTinggiBadan(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="berat_badan">Berat Badan</label>
                  <input type="text" class="form-control" id="berat_badan" name="berat_badan" value={berat} onChange={(e) => setBeratBadan(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="lingkar_kepala">Lingkar Kepala</label>
                  <input type="text" class="form-control" id="lingkar_kepala" name="lingkar_kepala" value={lingkarKepala} onChange={(e) => setLingkarKepala(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="lingkar_lengan">Lingkar Lengan</label>
                  <input type="text" class="form-control" id="lingkar_lengan" name="lingkar_lengan" value={lingkarLengan} onChange={(e) => setLingkarLengan(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="nama_ayah">Nama Ayah</label>
                  <input type="text" class="form-control" id="nama_ayah" name="nama_ayah" value={namaAyah} onChange={(e) => setNamaAyah(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="pekerjaan_ayah">Pekerjaan Ayah</label>
                  <input type="text" class="form-control" id="pekerjaan_ayah" name="pekerjaan_ayah" value={pekerjaanAyah} onChange={(e) => setPekerjaanAyah(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="riwayat_ayah">Riwayat Penyakit Ayah</label>
                  <input type="text" class="form-control" id="riwayat_ayah" name="riwayat_ayah" value={riwayatPenyakitAyah} onChange={(e) => setRiwayatPenyakitAyah(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="nama_ibu">Nama Ibu</label>
                  <input type="text" class="form-control" id="nama_ibu" name="nama_ibu" value={namaIbu} onChange={(e) => setNamaIbu(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="pekerjaan_ibu">Pekerjaan Ibu</label>
                  <input type="text" class="form-control" id="pekerjaan_ibu" name="pekerjaan_ibu" value={pekerjaanIbu} onChange={(e) => setPekerjaanIbu(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="riwayat_ibu">Riwayat Penyakit Ibu</label>
                  <input type="text" class="form-control" id="riwayat_ibu" name="riwayat_ibu" value={riwayatPenyakitIbu} onChange={(e) => setRiwayatPenyakitIbu(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
