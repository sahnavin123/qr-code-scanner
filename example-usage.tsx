// Simple usage in your Catalyst app - No wrappers needed!
import React from 'react';
import { QrScanner } from '@sahnavin123/scanner';
import '@sahnavin123/scanner/scanner.css';

export default function CreateTaskScanner() {
  const [show, setShow] = React.useState(false);

  const handleScanSuccess = (data: string) => {
    console.log('QR Code scanned:', data);
    // setShow(false);
  };

  const handleError = (error: Error) => {
    console.error('Scan error:', error);
  };

  return (
    <div>
      <p>Example with package build</p>
      <button onClick={() => setShow(true)}>
        Open QR Scanner
      </button>
      
      {/* Just use QrScanner directly - it handles SSR automatically! */}
      <QrScanner
        show={show}
        onScanSuccess={handleScanSuccess}
        onError={handleError}
        onClose={() => setShow(false)}
        config={{
          fps: 10,
          qrbox: 250,
        }}
        enableTorchToggle={true}
        enableFileUpload={true}
        enableCameraSwitching={false}
      />
    </div>
  );
}
