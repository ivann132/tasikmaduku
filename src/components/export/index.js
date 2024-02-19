import React, { useEffect, useState } from "react";
import { getData } from "services/mockData";

import { Input, Card, CardHeader, CardBody, Row, Col, Table, Label, Button } from "reactstrap";

import XLSX from "xlsx";

export const Export = () => {
  const [sheetData, setSheetData] = useState(null);

  useEffect(() => {
    setSheetData(getData());
    console.log(getData());
  },[]);
  
  

};
 