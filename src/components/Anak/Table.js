import React from "react";

const Table = ({ anak, handleEdit, handleDelete }) => {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>NIK</th>
            <th>No KK</th>
            <th>Nama Anak</th>
            <th>Gender</th>
            <th>Tempat Lahir Anak</th>
            <th>Tanggal Lahir Anak</th>
            <th>Umur Anak</th>
            <th>Alamat</th>
            <th>Tinggi Badan</th>
            <th>Berat Badan</th>
            <th>Lingkar Kepala</th>
            <th>Lingkar Lengan</th>
            <th>Nama Ayah</th>
            <th>Pekerjaan Ayah</th>
            <th>Riwayat Penyakit Ayah</th>
            <th>Nama Ibu</th>
            <th>Pekerjaan Ibu</th>
            <th>Riwayat Penyakit Ibu</th>

            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {anak ? (
            anak.map((kids, i) => (
              <tr key={kids.id}>
                <td>{kids.nik}</td>
                <td>{kids.kk}</td>
                <td>{kids.namaAnak}</td>
                <td>{kids.gender}</td>
                <td>{kids.tempatLahir}</td>
                <td>{kids.tanggalLahir}</td>
                <td>{kids.umur}</td>
                <td>{kids.alamat}</td>
                <td>{kids.tinggi}</td>
                <td>{kids.berat}</td>
                <td>{kids.lingkarKepala}</td>
                <td>{kids.lingkarLengan}</td>
                <td>{kids.namaAyah}</td>
                <td>{kids.pekerjaanAyah}</td>
                <td>{kids.riwayatPenyakitAyah}</td>
                <td>{kids.namaIbu}</td>
                <td>{kids.pekerjaanIbu}</td>
                <td>{kids.riwayatPenyakitIbu}</td>

                <td className="text-right">
                  <button onClick={() => handleEdit(kids.id)} className="muted-button-edit">
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button onClick={() => handleDelete(kids.id)} className="muted-button-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
