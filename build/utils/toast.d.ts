import { type ToastOptions } from "react-toastify";
export declare enum ToastType {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info"
}
export interface ToastConfig {
    position?: ToastOptions["position"];
    autoClose?: number;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
}
export interface ShowToastOptions {
    type: ToastType;
    message: string;
    config?: ToastConfig;
}
/**
 * Show a toast notification with customizable type and configuration
 */
export declare const showToast: ({ type, message, config }: ShowToastOptions) => void;
/**
 * Convenience methods for different toast types
 */
export declare const toastUtils: {
    success: (message: string, config?: ToastConfig) => void;
    error: (message: string, config?: ToastConfig) => void;
    warning: (message: string, config?: ToastConfig) => void;
    info: (message: string, config?: ToastConfig) => void;
    scannerError: (message: string, config?: ToastConfig) => void;
    qrScanner: {
        success: (message: string) => void;
        cameraAccessDenied: (message: string) => void;
        noCameraFound: (message: string) => void;
        torchNotSupported: (message: string) => void;
        scannerFailed: (message: string) => void;
        fileScanFailed: (message: string) => void;
    };
};
