import React, { useState } from "react";
import Swal from "sweetalert2";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Edit = ({ anak, selectedAnak, setAnak, setIsEditing, getAnak }) => {
  const id = selectedAnak.id;

  const [nik, setNIK] = useState(selectedAnak.nik);
  const [kk, setnoKK] = useState(selectedAnak.kk);
  const [namaAnak, setNamaAnak] = useState(selectedAnak.namaAnak);
  const [gender, setGender] = useState(selectedAnak.gender);
  const [tempatLahir, setTempatLahirAnak] = useState(selectedAnak.tempatLahir);
  const [tanggalLahir, setTanggalLahirAnak] = useState(selectedAnak.tanggalLahir);
  const [umur, setUmurAnak] = useState(selectedAnak.umur);
  const [alamat, setAlamat] = useState(selectedAnak.alamat);
  const [tinggi, setTinggiBadan] = useState(selectedAnak.tinggi);
  const [berat, setBeratBadan] = useState(selectedAnak.berat);
  const [lingkarKepala, setLingkarKepala] = useState(selectedAnak.lingkarKepala);
  const [lingkarLengan, setLingkarLengan] = useState(selectedAnak.lingkarLengan);
  const [namaAyah, setNamaAyah] = useState(selectedAnak.namaAyah);
  const [pekerjaanAyah, setPekerjaanAyah] = useState(selectedAnak.pekerjaanAyah);
  const [riwayatPenyakitAyah, setRiwayatPenyakitAyah] = useState(selectedAnak.riwayatPenyakitAyah);
  const [namaIbu, setNamaIbu] = useState(selectedAnak.namaIbu);
  const [pekerjaanIbu, setPekerjaanIbu] = useState(selectedAnak.pekerjaanIbu);
  const [riwayatPenyakitIbu, setRiwayatPenyakitIbu] = useState(selectedAnak.riwayatPenyakitIbu);

  const handleUpdate = async (e) => {
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

    const kids = {
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

    await setDoc(doc(db, "data_anak", id), {
      ...kids,
    });

    setAnak(anak);
    setIsEditing(false);
    getAnak();

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${kids.nik} ${kids.namaAnak}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <div class="main_content">
        <div class="container">
          <div class="card p-3 m-3">
            <div class="card-header">
              <h2>Edit Data Anak</h2>
            </div>
            <div class="card-body">
              <form onSubmit={handleUpdate}>
                <div class="form-group">
                  <label htmlfor="nik">NIK</label>
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

export default Edit;
