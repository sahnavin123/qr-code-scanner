/* eslint-disable @typescript-eslint/no-explicit-any */
export enum QRScannerErrorType {
  CAMERA_ACCESS_DENIED = 'CAMERA_ACCESS_DENIED',
  NO_CAMERA_FOUND = 'NO_CAMERA_FOUND',
  CAMERA_INITIALIZATION_FAILED = 'CAMERA_INITIALIZATION_FAILED',
  SCANNER_START_FAILED = 'SCANNER_START_FAILED',
  SCANNER_STOP_FAILED = 'SCANNER_STOP_FAILED',
  CAMERA_SWITCH_FAILED = 'CAMERA_SWITCH_FAILED',
  TORCH_TOGGLE_FAILED = 'TORCH_TOGGLE_FAILED',
  TORCH_NOT_SUPPORTED = 'TORCH_NOT_SUPPORTED',
  ZOOM_SET_FAILED = 'ZOOM_SET_FAILED',
  ZOOM_NOT_SUPPORTED = 'ZOOM_NOT_SUPPORTED',
  FILE_SCAN_FAILED = 'FILE_SCAN_FAILED',
  PERMISSION_REQUEST_FAILED = 'PERMISSION_REQUEST_FAILED',
  SCANNER_NOT_INITIALIZED = 'SCANNER_NOT_INITIALIZED',
  SCANNER_NOT_ACTIVE = 'SCANNER_NOT_ACTIVE',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export interface QRScannerError extends Error {
  type: QRScannerErrorType;
  originalError?: Error;
}

export class QRScannerCustomError extends Error implements QRScannerError {
  public type: QRScannerErrorType;
  public originalError?: Error;

  constructor(
    type: QRScannerErrorType,
    message: string,
    originalError?: Error,
  ) {
    super(message);
    this.name = 'QRScannerCustomError';
    this.type = type;
    this.originalError = originalError;

    // Maintain proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, QRScannerCustomError);
    }
  }
}

export interface ErrorHandlingConfig {
  throwErrors: boolean;
  logErrors: boolean;
  errorTypes: {
    [key in QRScannerErrorType]?: {
      shouldThrow: boolean;
      shouldLog: boolean;
      customMessage?: string;
    };
  };
}

export const defaultErrorConfig: ErrorHandlingConfig = {
  throwErrors: true,
  logErrors: true,
  errorTypes: {
    [QRScannerErrorType.CAMERA_ACCESS_DENIED]: {
      shouldThrow: true,
      shouldLog: true,
      customMessage: 'Camera access was denied. Please allow camera permissions.'
    },
    [QRScannerErrorType.NO_CAMERA_FOUND]: {
      shouldThrow: true,
      shouldLog: true,
      customMessage: 'No camera devices were found on this device.'
    },
    [QRScannerErrorType.SCANNER_NOT_INITIALIZED]: {
      shouldThrow: true,
      shouldLog: true,
      customMessage: 'Scanner is not properly initialized.'
    },
    [QRScannerErrorType.TORCH_NOT_SUPPORTED]: {
      shouldThrow: false,
      shouldLog: true,
      customMessage: 'Torch/flashlight is not supported on this device.'
    },
    [QRScannerErrorType.ZOOM_NOT_SUPPORTED]: {
      shouldThrow: false,
      shouldLog: true,
      customMessage: 'Zoom functionality is not supported on this device.'
    }
  }
};