import type { IScannerConfig, ICameraConfig } from "./engines/interface";
export interface IUseScannerOptions {
    config: IScannerConfig;
    onScanSuccess: (data: string) => void;
    onError?: (error: Error) => void;
    setLoadingScanner: (value: boolean) => void;
}
export interface IUseScannerResult {
    containerRef: any;
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
export declare function useScanner(options: IUseScannerOptions): IUseScannerResult;
