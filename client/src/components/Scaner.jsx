import React from "react";
import { useState } from "react";
import QrReader from "react-qr-scanner";

export default function Scaner() {
  const [qrscan, setQrscan] = useState("no result");
  console.log(qrscan);
  function handleScan(data) {
    if (data) {
      setQrscan(data);
    }
  }

  function handleError(error) {
    console.error(error);
  }
  return (
    <div>
      <QrReader
        delay={100}
        onScan={handleScan}
        onError={handleError}
        style={{ height: 240, width: 320 }}
      ></QrReader>
      <p>{JSON.stringify(qrscan)}</p>
    </div>
  );
}
