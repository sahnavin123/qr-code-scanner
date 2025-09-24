import { toast, type ToastOptions, type TypeOptions } from "react-toastify";

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
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

// Default toast configurations for different types
const DEFAULT_TOAST_CONFIGS: Record<ToastType, ToastConfig> = {
  [ToastType.SUCCESS]: {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
  [ToastType.ERROR]: {
    position: "top-right",
    autoClose: 3000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
  [ToastType.WARNING]: {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
  [ToastType.INFO]: {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
};

/**
 * Show a toast notification with customizable type and configuration
 */
export const showToast = ({ type, message, config }: ShowToastOptions): void => {
  const defaultConfig = DEFAULT_TOAST_CONFIGS[type];
  const finalConfig: ToastOptions = {
    ...defaultConfig,
    ...config,
    type: type as TypeOptions,
  };

  toast(message, finalConfig);
};

/**
 * Convenience methods for different toast types
 */
export const toastUtils = {
  success: (message: string, config?: ToastConfig) => 
    showToast({ type: ToastType.SUCCESS, message, config }),
    
  error: (message: string, config?: ToastConfig) => 
    showToast({ type: ToastType.ERROR, message, config }),
    
  warning: (message: string, config?: ToastConfig) => 
    showToast({ type: ToastType.WARNING, message, config }),
    
  info: (message: string, config?: ToastConfig) => 
    showToast({ type: ToastType.INFO, message, config }),

  // Special method for QR Scanner errors with shorter duration
  scannerError: (message: string, config?: ToastConfig) => 
    showToast({ 
      type: ToastType.ERROR, 
      message, 
      config: { autoClose: 3000, ...config } 
    }),

  // QR Scanner specific methods
  qrScanner: {
    success: (message: string) => 
      showToast({ 
        type: ToastType.SUCCESS, 
        message, 
        config: { autoClose: 3000 } 
      }),
    
    cameraAccessDenied: (message: string) => 
      showToast({ 
        type: ToastType.ERROR, 
        message, 
        config: { autoClose: 5000 } // Longer for critical errors
      }),
    
    noCameraFound: (message: string) => 
      showToast({ 
        type: ToastType.ERROR, 
        message, 
        config: { autoClose: 3000 } 
      }),
    
    torchNotSupported: (message: string) => 
      showToast({ 
        type: ToastType.WARNING, 
        message, 
        config: { autoClose: 3000 } 
      }),
    
    scannerFailed: (message: string) => 
      showToast({ 
        type: ToastType.ERROR, 
        message, 
        config: { autoClose: 3000 } 
      }),
    
    fileScanFailed: (message: string) => 
      showToast({ 
        type: ToastType.ERROR, 
        message, 
        config: { autoClose: 3000 } 
      }),
  },
};