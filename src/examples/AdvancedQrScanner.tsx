import { useState } from "react";
import { QrScanner } from "../components/QrScanner";
import "../styles/AdvancedQrScanner.css";

export function AdvancedQrScanner() {
  const [scannedData, setScannedData] = useState<string>("");
  const [scanHistory, setScanHistory] = useState<{ data: string; timestamp: Date }[]>([]);
  const [openScanner, setOpenScanner] = useState<boolean>(false);
  const [scanConfig, setScanConfig] = useState({
    fps: 10,
    width: 300,
    height: 300,
    zoom: 1.0,
  });

  const handleScanSuccess = (data: string) => {
    console.log(data, 'data after scan');
    setScannedData(data);
    setScanHistory((prev) => [
      { data, timestamp: new Date() },
      ...prev.slice(0, 19) // Keep last 20 scans
    ]);
  };

  const handleScanError = (error: Error) => {
    console.error("Scan error:", error);
  };

  const clearHistory = () => {
    setScanHistory([]);
    setScannedData("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="advanced-scanner-container">
      <h2 className="advanced-scanner-heading">Advanced QR Code Scanner</h2>

      {/* Configuration Section */}
      <div className="advanced-config-section">
        <h3>Scanner Configuration</h3>
        <div className="advanced-config-grid">
          <div className="advanced-config-item">
            <label className="advanced-config-label">FPS:</label>
            <input
              className="advanced-config-input"
              type="number"
              min="1"
              max="30"
              value={scanConfig.fps}
              onChange={(e) => setScanConfig(prev => ({ ...prev, fps: parseInt(e.target.value) || 10 }))}
            />
          </div>
          <div className="advanced-config-item">
            <label className="advanced-config-label">Width:</label>
            <input
              className="advanced-config-input"
              type="number"
              min="100"
              max="500"
              value={scanConfig.width}
              onChange={(e) => setScanConfig(prev => ({ ...prev, width: parseInt(e.target.value) || 300 }))}
            />
          </div>
          <div className="advanced-config-item">
            <label className="advanced-config-label">Height:</label>
            <input
              className="advanced-config-input"
              type="number"
              min="100"
              max="500"
              value={scanConfig.height}
              onChange={(e) => setScanConfig(prev => ({ ...prev, height: parseInt(e.target.value) || 300 }))}
            />
          </div>
          <div className="advanced-config-item">
            <label className="advanced-config-label">Zoom:</label>
            <input
              className="advanced-config-input"
              type="number"
              min="0.5"
              max="3"
              step="0.1"
              value={scanConfig.zoom}
              onChange={(e) => setScanConfig(prev => ({ ...prev, zoom: parseFloat(e.target.value) || 1.0 }))}
            />
          </div>
        </div>
      </div>

      <div className="advanced-button-group">
        <button className="advanced-button" onClick={() => setOpenScanner(true)}>
          Start Advanced Scanner
        </button>
      </div>

      {openScanner && (
        <QrScanner
          show={openScanner}
          onClose={() => setOpenScanner(false)}
          config={{
            fps: scanConfig.fps,
            qrbox: { width: scanConfig.width, height: scanConfig.height },
            zoom: scanConfig.zoom,
          }}
          onScanSuccess={handleScanSuccess}
          onError={handleScanError}
          enableTorchToggle={true}
          enableFileUpload={true}
        />
      )}

      {scannedData && (
        <div className="advanced-scan-result">
          <button 
            className="advanced-copy-button"
            onClick={() => copyToClipboard(scannedData)}
            title="Copy to clipboard"
          >
            Copy
          </button>
          <h3>Latest Scan Result:</h3>
          <p>{scannedData}</p>
        </div>
      )}

      {scanHistory.length > 0 && (
        <div className="advanced-scan-history">
          <div className="advanced-history-header">
            <h3>Scan History ({scanHistory.length})</h3>
            <button className="advanced-clear-button" onClick={clearHistory}>
              Clear History
            </button>
          </div>
          <ul className="advanced-history-list">
            {scanHistory.map((item, index) => (
              <li key={index} className="advanced-history-item">
                <button 
                  className="advanced-history-copy-button"
                  onClick={() => copyToClipboard(item.data)}
                  title="Copy to clipboard"
                >
                  Copy
                </button>
                <div className="advanced-timestamp">
                  {item.timestamp.toLocaleString()}
                </div>
                <div className="advanced-history-data">
                  {item.data}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}