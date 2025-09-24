/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Html5Qrcode,
  Html5QrcodeScannerState,
  type CameraDevice,
  type Html5QrcodeCameraScanConfig,
} from "html5-qrcode";
import type {
  IScannerEngine,
  IScannerConfig,
  ICameraConfig,
} from "../../core/engines/interface";
import type { Platform } from "../../enums/platform.enum";
import {
  QRScannerErrorType,
  QRScannerCustomError,
} from "../../types/error-types";

export class Html5QrcodeAdapter implements IScannerEngine {
  private scanner: Html5Qrcode | null = null;
  private currentCameraId: string | null = null;
  private elementId: string = "";
  private onSuccessCallback: ((data: string) => void) | null = null;
  // private onErrorCallback: ((error: Error) => void) | null = null;

  async start(
    element: HTMLElement,
    config: IScannerConfig,
    onSuccess: (data: string) => void,
    _onError: (error: Error) => void,
    _platform?: Platform
  ): Promise<void> {
    try {
      this.elementId = element.id;
      this.scanner = new Html5Qrcode(this.elementId);

      // Store callbacks for later use in camera switching
      this.onSuccessCallback = onSuccess;
      // this.onErrorCallback = onError;

      // Get available cameras
      const cameras = await Html5Qrcode.getCameras();
      if (!cameras || cameras.length === 0) {
        throw new QRScannerCustomError(
          QRScannerErrorType.NO_CAMERA_FOUND,
          "No camera devices found",
          undefined
        );
      }

      // Use the first available camera (preferably back camera)
      this.currentCameraId =
        cameras.find(
          (cam) =>
            cam.label.toLowerCase().includes("back") ||
            cam.label.toLowerCase().includes("environment")
        )?.id || cameras[0].id;

      // Configure the scanner
      const cameraConfig: Html5QrcodeCameraScanConfig = {
        fps: config?.fps ?? 10,
        qrbox: config?.qrbox ?? 250,
        aspectRatio: 1.0,
        disableFlip: false,
      };

      // Start scanning
      await this.scanner.start(
        { deviceId: { exact: this.currentCameraId } },
        cameraConfig,
        (decodedText) => {
          onSuccess(decodedText);
        },
        (_errorMessage) => {
          // Only log scanning errors, don't call onError for every scan attempt
          // console.warn("QR Scan attempt failed:", errorMessage);
        }
      );

      // Apply additional constraints if specified
      if (config?.zoom) {
        await this.setZoom(config.zoom);
      }
    } catch (error) {
      if (error instanceof QRScannerCustomError) {
        throw error;
      } else {
        throw new QRScannerCustomError(
          QRScannerErrorType.SCANNER_START_FAILED,
          `Failed to start QR scanner: ${(error as Error).message}`,
          error as Error
        );
      }
    }
  }

  async stop(): Promise<void> {
    if (
      this.scanner &&
      this.scanner.getState() !== Html5QrcodeScannerState.NOT_STARTED
    ) {
      try {
        await this.scanner.stop();
        this.scanner.clear();
      } catch (error) {
        throw new QRScannerCustomError(
          QRScannerErrorType.SCANNER_STOP_FAILED,
          `Failed to stop scanner: ${(error as Error).message}`,
          error as Error
        );
      } finally {
        this.scanner = null;
        this.onSuccessCallback = null;
        // this.onErrorCallback = null;
      }
    }
  }

  async getCameras(): Promise<ICameraConfig[]> {
    try {
      const devices: CameraDevice[] = await Html5Qrcode.getCameras();
      return devices.map((device) => ({
        deviceId: device.id,
        label: device.label,
        kind: "videoinput",
        groupId: "",
      }));
    } catch (error) {
      throw new QRScannerCustomError(
        QRScannerErrorType.CAMERA_INITIALIZATION_FAILED,
        `Failed to get cameras: ${(error as Error).message}`,
        error as Error
      );
    }
  }

  async switchCamera(cameraId: string, config: IScannerConfig): Promise<void> {
    if (
      !this.scanner ||
      this.scanner.getState() === Html5QrcodeScannerState.NOT_STARTED
    ) {
      throw new QRScannerCustomError(
        QRScannerErrorType.SCANNER_NOT_ACTIVE,
        "Scanner not active",
        undefined
      );
    }

    try {
      await this.scanner.stop();
      this.currentCameraId = cameraId;

      // Restart with new camera
      const cameraConfig: Html5QrcodeCameraScanConfig = {
        fps: config.fps || 10,
        qrbox: config.qrbox || 250,
        aspectRatio: 1.0,
        disableFlip: false,
      };

      await this.scanner.start(
        { deviceId: { exact: cameraId } },
        cameraConfig,
        (decodedText) => {
          if (this.onSuccessCallback) {
            this.onSuccessCallback(decodedText);
          }
        },
        (_errorMessage) => {
          // Only log scanning errors, don't call onError for every scan attempt
          // console.warn("QR Scan attempt failed:", errorMessage);
        }
      );

      // Apply additional constraints if specified
      // if (config?.zoom) {
      //   await this.setZoom(config.zoom);
      // }
    } catch (error) {
      throw new QRScannerCustomError(
        QRScannerErrorType.CAMERA_SWITCH_FAILED,
        `Failed to switch camera: ${(error as Error).message}`,
        error as Error
      );
    }
  }

  async toggleTorch(enabled: boolean): Promise<void> {
    if (
      !this.scanner ||
      this.scanner.getState() === Html5QrcodeScannerState.NOT_STARTED
    ) {
      throw new QRScannerCustomError(
        QRScannerErrorType.SCANNER_NOT_INITIALIZED,
        "Scanner not initialized",
        undefined
      );
    }

    try {
      await this.scanner.applyVideoConstraints({
        advanced: [{ torch: enabled } as any],
      });
    } catch (error) {
      // Check if torch is not supported
      if (
        (error as Error).message.toLowerCase().includes("torch") ||
        (error as Error).message.toLowerCase().includes("constraint")
      ) {
        throw new QRScannerCustomError(
          QRScannerErrorType.TORCH_NOT_SUPPORTED,
          "Torch not supported on this device",
          error as Error
        );
      }
      throw new QRScannerCustomError(
        QRScannerErrorType.TORCH_TOGGLE_FAILED,
        `Failed to toggle torch: ${(error as Error).message}`,
        error as Error
      );
    }
  }

  async setZoom(value: number): Promise<void> {
    if (
      !this.scanner ||
      this.scanner.getState() === Html5QrcodeScannerState.NOT_STARTED
    ) {
      throw new QRScannerCustomError(
        QRScannerErrorType.SCANNER_NOT_INITIALIZED,
        "Scanner not initialized",
        undefined
      );
    }

    try {
      await this.scanner.applyVideoConstraints({
        advanced: [{ zoom: value } as any],
      });
    } catch (error) {
      if (
        (error as Error).message.toLowerCase().includes("zoom") ||
        (error as Error).message.toLowerCase().includes("constraint")
      ) {
        throw new QRScannerCustomError(
          QRScannerErrorType.ZOOM_NOT_SUPPORTED,
          "Zoom not supported on this device",
          error as Error
        );
      }
      throw new QRScannerCustomError(
        QRScannerErrorType.ZOOM_SET_FAILED,
        `Failed to set zoom: ${(error as Error).message}`,
        error as Error
      );
    }
  }

  async scanFile(file: File): Promise<string> {
    // Create a temporary unique element ID for file scanning
    const tempElementId = `temp-scanner-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;

    // Create a temporary div element and add it to the document
    const tempDiv = document.createElement("div");
    tempDiv.id = tempElementId;
    tempDiv.style.display = "none"; // Hide the element
    document.body.appendChild(tempDiv);

    try {
      // Create a new Html5Qrcode instance specifically for file scanning
      const fileScanner = new Html5Qrcode(tempElementId);
      const result = await fileScanner.scanFile(file, true);

      // Clean up: remove the temporary element
      if (document.body.contains(tempDiv)) {
        document.body.removeChild(tempDiv);
      }

      return result;
    } catch (error) {
      // Clean up: remove the temporary element even if scanning fails
      if (document.body.contains(tempDiv)) {
        document.body.removeChild(tempDiv);
      }

      throw new QRScannerCustomError(
        QRScannerErrorType.FILE_SCAN_FAILED,
        `Failed to scan file: ${(error as Error).message}`,
        error as Error
      );
    }
  }

  async hasCameraPermission(): Promise<boolean> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      return true;
    } catch (error) {
      return false;
    }
  }

  async requestCameraPermission(): Promise<boolean> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      stream.getTracks().forEach((track) => track.stop());
      return true;
    } catch (error) {
      throw new QRScannerCustomError(
        QRScannerErrorType.CAMERA_ACCESS_DENIED,
        "Camera access denied or unavailable",
        error as Error
      );
    }
  }

  async isTorchAvailable(): Promise<boolean> {
    if (
      !this.scanner ||
      this.scanner.getState() === Html5QrcodeScannerState.NOT_STARTED
    ) {
      return false;
    }

    try {
      const capabilities = await this.scanner.getRunningTrackCapabilities();
      return !!(capabilities as any).torch;
    } catch (error) {
      return false;
    }
  }

  getCurrentCameraId(): string | null {
    return this.currentCameraId;
  }
}
