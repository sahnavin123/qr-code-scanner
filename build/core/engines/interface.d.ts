import type { Platform } from "../../enums/platform.enum";
export interface IScannerConfig {
    fps?: number;
    qrbox?: number | {
        width: number;
        height: number;
    };
    zoom?: number;
}
export interface ICameraConfig {
    deviceId: string;
    label: string;
    kind: string;
    groupId: string;
}
export interface IScannerEngine {
    /**
     * Start scanning and bind video feed to the DOM element.
     */
    start(element: HTMLElement, config: IScannerConfig, onSuccess: (data: string) => void, onError: (error: Error) => void, platform?: Platform): Promise<void>;
    /**
     * Stop scanning and release any camera or stream.
     */
    stop(): Promise<void>;
    /**
     * List available video input devices.
     */
    getCameras?(): Promise<ICameraConfig[]>;
    /**
     * Switch to another camera using deviceId.
     */
    switchCamera?(cameraId: string, config: IScannerConfig): Promise<void>;
    /**
     * Enable or disable torch (flashlight).
     */
    toggleTorch?(enabled: boolean): Promise<void>;
    /**
     * Set camera zoom level.
     */
    setZoom?(value: number): Promise<void>;
    /**
     * Retry mechanism in case of startup failure.
     */
    startWithRetry?(element: HTMLElement, config: IScannerConfig, onSuccess: (data: string) => void, onError: (error: Error) => void, retryCount?: number, retryDelay?: number): Promise<void>;
    /**
     * Scan QR from an uploaded file.
     */
    scanFile?(file: File): Promise<string>;
    /** Check if camera access is granted */
    hasCameraPermission?(): Promise<boolean>;
    /** Request camera permission (used if not auto-triggered on start) */
    requestCameraPermission?(): Promise<boolean>;
    /** Check if torch (flashlight) is supported on current camera */
    isTorchAvailable?(): Promise<boolean>;
}
