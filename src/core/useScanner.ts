/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { Platform } from "../enums/platform.enum";
import { getPlatForm } from "../utils/platform";
import type { IScannerConfig, ICameraConfig } from "./engines/interface";
import { scannerEngine } from "./engines/scanner-engine";

export interface IUseScannerOptions {
  config: IScannerConfig;
  onScanSuccess: (data: string) => void;
  onError?: (error: Error) => void;
  setLoadingScanner: (value: boolean) => void;
}

export interface IUseScannerResult {
  containerRef: any;
  // Optional helper methods if needed
  switchCamera?: (id: string, config: IScannerConfig) => Promise<void>;
  toggleTorch?: (enabled: boolean) => Promise<void>;
  setZoom?: (value: number) => Promise<void>;
  scanFile?: (file: File) => Promise<string>;
  stop?: () => Promise<void>;

  /** Permission utilities */
  hasCameraPermission?: () => Promise<boolean>;
  requestCameraPermission?: () => Promise<boolean>;
  isTorchAvailable?: () => Promise<boolean>;
  getCameras?: () => Promise<ICameraConfig[]>;
  getCurrentCameraId?: () => string | null;
}

export function useScanner(options: IUseScannerOptions): IUseScannerResult {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const platform: Platform = getPlatForm();

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Add a small delay to ensure DOM is fully rendered
    options.setLoadingScanner(true);
    const timer = setTimeout(async () => {
      if (containerRef.current) {
        try {
          const hasPermission = await scannerEngine.hasCameraPermission?.();
          if (!hasPermission) {
            const granted = await scannerEngine.requestCameraPermission?.();
            if (!granted) {
              options.setLoadingScanner(false);
              return;
            }
          }

          await scannerEngine.start(
            containerRef.current,
            {
              fps: options.config.fps || 10,
              qrbox: options.config.qrbox || { height: 200, width: 200 },
              zoom: options.config.zoom,
            },
            options.onScanSuccess,
            options.onError ?? (() => {}),
            platform // pass to engine
          );
          options.setLoadingScanner(false)
        } catch (error) {
          // Handle errors from scanner start
          if (options.onError) {
            options.onError(error as Error);
          }
          options.setLoadingScanner(false)
        }
      }
    }, 40);

    return () => {
      options.setLoadingScanner(false);
      clearTimeout(timer);
      scannerEngine.stop();
    };
  }, [
    options.config.fps,
    options.config.qrbox,
    options.config.zoom,
    options.onScanSuccess,
    options.onError,
    platform,
  ]);

  return {
    containerRef,
    switchCamera: scannerEngine.switchCamera?.bind(scannerEngine),
    toggleTorch: scannerEngine.toggleTorch?.bind(scannerEngine),
    setZoom: scannerEngine.setZoom?.bind(scannerEngine),
    scanFile: scannerEngine.scanFile?.bind(scannerEngine),
    stop: scannerEngine.stop?.bind(scannerEngine),

    hasCameraPermission: scannerEngine.hasCameraPermission?.bind(scannerEngine),
    requestCameraPermission:
      scannerEngine.requestCameraPermission?.bind(scannerEngine),
    isTorchAvailable: scannerEngine.isTorchAvailable?.bind(scannerEngine),
    getCameras: scannerEngine.getCameras?.bind(scannerEngine),
    getCurrentCameraId: scannerEngine.getCurrentCameraId?.bind(scannerEngine),
  };
}
