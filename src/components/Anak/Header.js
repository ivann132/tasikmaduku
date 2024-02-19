import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firestore";
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  
  const [sheetData, setSheetData] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const dataRef = collection(db,"data_anak");
        const snapshot = await getDocs(dataRef);
        const data = snapshot.docs.map(doc => doc.data());
        setSheetData(data);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, []);

  const handleOnExport = () => {
    if (!sheetData) return;

    const XLSX = require("xlsx");

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(wb, ws, "Data1");

    XLSX.writeFile(wb, "DataAnak.xlsx");
  };

  return (
    <header>
      <h1>Data Anak</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px'}}>
        <button onClick={() => setIsAdding(true)}>Add</button>
        <button onClick={handleOnExport}>Export</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
