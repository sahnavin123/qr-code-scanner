export declare enum QRScannerErrorType {
    CAMERA_ACCESS_DENIED = "CAMERA_ACCESS_DENIED",
    NO_CAMERA_FOUND = "NO_CAMERA_FOUND",
    CAMERA_INITIALIZATION_FAILED = "CAMERA_INITIALIZATION_FAILED",
    SCANNER_START_FAILED = "SCANNER_START_FAILED",
    SCANNER_STOP_FAILED = "SCANNER_STOP_FAILED",
    CAMERA_SWITCH_FAILED = "CAMERA_SWITCH_FAILED",
    TORCH_TOGGLE_FAILED = "TORCH_TOGGLE_FAILED",
    TORCH_NOT_SUPPORTED = "TORCH_NOT_SUPPORTED",
    ZOOM_SET_FAILED = "ZOOM_SET_FAILED",
    ZOOM_NOT_SUPPORTED = "ZOOM_NOT_SUPPORTED",
    FILE_SCAN_FAILED = "FILE_SCAN_FAILED",
    PERMISSION_REQUEST_FAILED = "PERMISSION_REQUEST_FAILED",
    SCANNER_NOT_INITIALIZED = "SCANNER_NOT_INITIALIZED",
    SCANNER_NOT_ACTIVE = "SCANNER_NOT_ACTIVE",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export interface QRScannerError extends Error {
    type: QRScannerErrorType;
    originalError?: Error;
}
export declare class QRScannerCustomError extends Error implements QRScannerError {
    type: QRScannerErrorType;
    originalError?: Error;
    constructor(type: QRScannerErrorType, message: string, originalError?: Error);
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
export declare const defaultErrorConfig: ErrorHandlingConfig;
