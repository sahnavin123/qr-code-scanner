export declare const MESSAGES: {
    readonly TOAST: {
        readonly QR_SCANNED_SUCCESS: "QR Code Scanned Successfully!";
        readonly CAMERA_ACCESS_DENIED: "Camera access denied. Please allow camera permission and refresh the page.";
        readonly NO_CAMERA_FOUND: "No camera found on this device.";
        readonly SCANNER_START_FAILED: "Failed to start QR scanner";
        readonly SCANNER_NOT_INITIALIZED: "Failed to initialize QR scanner";
        readonly FILE_SCAN_FAILED: "Failed to scan file";
    };
    readonly ERROR: {
        readonly FAILED_TO_TOGGLE_TORCH: "Failed to toggle torch";
        readonly FAILED_TO_SWITCH_CAMERA: "Failed to switch camera";
        readonly FAILED_TO_SCAN_FILE: "Failed to scan file";
    };
    readonly UI: {
        readonly SCANNED_STATUS: "✅ Scanned";
        readonly INITIALIZING_CAMERA: "Initializing camera...";
        readonly SWITCH_CAMERA: "Switch Camera";
    };
    readonly ALT_TEXT: {
        readonly CLOSE: "Close";
        readonly TOGGLE_TORCH: "Toggle Torch";
        readonly FILE_UPLOAD: "Upload File";
    };
    readonly CAMERA: {
        readonly DEFAULT_LABEL: (deviceId: string) => string;
    };
};
export type Messages = typeof MESSAGES;
