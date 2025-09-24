import { useState } from "react";
import { QrScanner } from "../components/QrScanner";
import "../styles/BasicQrScanner.css";

export function BasicQrScanner() {
  const [scannedData, setScannedData] = useState<string>("");
  const [scanHistory, setScanHistory] = useState<string[]>([]);
  const [openScanner, setOpenScanner] = useState<boolean>(false);

  const handleScanSuccess = (data: string) => {
    console.log(data, 'data after scan')
    setScannedData(data);
    setScanHistory((prev) => [data, ...prev.slice(0, 9)]);
  };

  const handleScanError = (error: Error) => {
    console.error("Scan error:", error);
  };

  return (
    <div className="basic-scanner-container">
      <h2 className="basic-scanner-heading">Basic QR Code Scanner</h2>

      <button className="basic-scanner-button" onClick={() => setOpenScanner(true)}>
        Click to open scanner
      </button>

      {openScanner && (
        <QrScanner
          show={openScanner}
          onClose={() => setOpenScanner(false)}
          config={{
            fps: 10,
            qrbox: { width: 250, height: 250 },
            zoom: 1.0,
          }}
          onScanSuccess={handleScanSuccess}
          onError={handleScanError}
          enableTorchToggle={true}
          enableFileUpload={true}
        />
      )}

      {scannedData && (
        <div className="basic-scanner-result">
          <h3>Latest Scan Result:</h3>
          <p>{scannedData}</p>
        </div>
      )}

      {scanHistory.length > 0 && (
        <div className="basic-scanner-history">
          <h3 className="basic-scanner-history-title">Scan History:</h3>
          <ul className="basic-scanner-history-list">
            {scanHistory.map((data, index) => (
              <li key={index} className="basic-scanner-history-item">
                {data}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}