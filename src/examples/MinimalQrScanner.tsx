import { useState } from "react";
import { QrScanner } from "../components/QrScanner";
import "../styles/MinimalQrScanner.css";

export function MinimalQrScanner() {
  const [scannedData, setScannedData] = useState<string>("");
  const [openScanner, setOpenScanner] = useState<boolean>(false);

  const handleScanSuccess = (data: string) => {
    console.log('Scanned:', data);
    setScannedData(data);
    setOpenScanner(false); // Auto close after scan
  };

  const handleScanError = (error: Error) => {
    console.error("Scan error:", error);
  };

  return (
    <div className="minimal-scanner-container">
      <h2 className="minimal-scanner-heading">Minimal QR Scanner</h2>
      
      <button className="minimal-scanner-button" onClick={() => setOpenScanner(true)}>
        Scan QR Code
      </button>

      {openScanner && (
        <QrScanner
          show={openScanner}
          onClose={() => setOpenScanner(false)}
          config={{
            fps: 5,
            qrbox: { width: 200, height: 200 },
          }}
          onScanSuccess={handleScanSuccess}
          onError={handleScanError}
        />
      )}

      {scannedData && (
        <div className="minimal-scanner-result">
          <strong>Result:</strong> {scannedData}
        </div>
      )}
    </div>
  );
}