import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Anak = ({ setIsAuthenticated }) => {
  const [anak, setAnak] = useState();
  const [selectedAnak, setSelectedAnak] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getAnak = async () => {
    const querySnapshot = await getDocs(collection(db, "data_anak"));
    const anak = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setAnak(anak);
  };

  useEffect(() => {
    getAnak();
  }, []);

  const handleEdit = (id) => {
    const [kids] = anak.filter((kids) => kids.id === id);

    setSelectedAnak(kids);
    setIsEditing(true);
  };

  
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => { 
      if (result.value) {
        const [kids] = anak.filter((kids) => kids.id === id);

        deleteDoc(doc(db, "data_anak", id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${kids.firstName} ${kids.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const anakCopy = anak.filter((kids) => kids.id !== id);
        setAnak(anakCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} setIsAuthenticated={setIsAuthenticated} />
          <Table anak={anak} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      )}
      {isAdding && <Add anak={anak} setAnak={setAnak} setIsAdding={setIsAdding} getAnak={getAnak} />}
      {isEditing && <Edit anak={anak} selectedAnak={selectedAnak} setAnak={setAnak} setIsEditing={setIsEditing} getAnak={getAnak} />}
    </div>
  );
};

export default Anak;
