import type { IScannerConfig } from '../core/engines/interface';

export interface IQrScannerProps {
  /**
   * Can give custom fps, qrbox size, zoom, etc.
   * Changing this function reference can trigger engine restart.
   */
  config: IScannerConfig;

  /**
   * Called when a QR code is successfully scanned.
   * Changing this function reference can trigger engine restart.
   */
  onScanSuccess: (data: string) => void;

  /**
   * Called when an error occurs during scanning.
   * Changing this function reference can trigger engine restart.
   */
  onError?: (error: Error) => void;

  /**
   * Whether to show the torch toggle button in UI.
   * Defaults to `true`.
   */
  enableTorchToggle?: boolean;

  /**
   * Whether to show the camera switch button in UI.
   * Defaults to `true`.
   */
  enableCameraSwitching?: boolean;

  /**
   * Whether to allow scanning from uploaded files.
   * Defaults to `true`.
   */
  enableFileUpload?: boolean;

  /**
   * Custom success UI to display after a successful scan.
   * This is rendered absolutely and does not affect layout.
   */
  renderSuccessState?: (data: string) => React.ReactNode;

  /**
   * Custom error UI to display on error.
   * This is rendered absolutely and does not affect layout.
   */
  renderErrorState?: (error: Error) => React.ReactNode;

  show: boolean;
  /**
   * State for controlling scanner state.
   */

  onClose: () => void
  /**
   * This to close safely close the scanner.
   */
}
