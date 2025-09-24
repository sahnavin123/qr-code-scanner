export const MESSAGES = {
  // Toast Messages
  TOAST: {
    QR_SCANNED_SUCCESS: "QR Code Scanned Successfully!",
    CAMERA_ACCESS_DENIED: "Camera access denied. Please allow camera permission and refresh the page.",
    NO_CAMERA_FOUND: "No camera found on this device.",
    SCANNER_START_FAILED: "Failed to start QR scanner",
    SCANNER_NOT_INITIALIZED: "Failed to initialize QR scanner",
    FILE_SCAN_FAILED: "Failed to scan file",
  },

  // Error Messages
  ERROR: {
    FAILED_TO_TOGGLE_TORCH: "Failed to toggle torch",
    FAILED_TO_SWITCH_CAMERA: "Failed to switch camera",
    FAILED_TO_SCAN_FILE: "Failed to scan file",
  },

  // UI Labels
  UI: {
    SCANNED_STATUS: "✅ Scanned",
    INITIALIZING_CAMERA: "Initializing camera...",
    SWITCH_CAMERA: "Switch Camera",
  },

  // Alt Text for Images
  ALT_TEXT: {
    CLOSE: "Close",
    TOGGLE_TORCH: "Toggle Torch",
    FILE_UPLOAD: "Upload File",
  },

  // Camera Labels
  CAMERA: {
    DEFAULT_LABEL: (deviceId: string) => `Camera ${deviceId.slice(-4)}`,
  },
} as const;

export type Messages = typeof MESSAGES;