import type { IScannerEngine, IScannerConfig, ICameraConfig } from "../../core/engines/interface";
import type { Platform } from "../../enums/platform.enum";
export declare class Html5QrcodeAdapter implements IScannerEngine {
    private scanner;
    private currentCameraId;
    private elementId;
    private onSuccessCallback;
    start(element: HTMLElement, config: IScannerConfig, onSuccess: (data: string) => void, _onError: (error: Error) => void, _platform?: Platform): Promise<void>;
    stop(): Promise<void>;
    getCameras(): Promise<ICameraConfig[]>;
    switchCamera(cameraId: string, config: IScannerConfig): Promise<void>;
    toggleTorch(enabled: boolean): Promise<void>;
    setZoom(value: number): Promise<void>;
    scanFile(file: File): Promise<string>;
    hasCameraPermission(): Promise<boolean>;
    requestCameraPermission(): Promise<boolean>;
    isTorchAvailable(): Promise<boolean>;
    getCurrentCameraId(): string | null;
}
