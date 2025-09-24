/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { IQrScannerProps } from "../types/qr-scanner.interface";
import { useScanner } from "../core/useScanner";
import { QRScannerCustomError, QRScannerErrorType } from "../types/error-types";
import type { ICameraConfig } from "../core/engines/interface";
import "react-toastify/dist/ReactToastify.css";
import "./QrScanner.css";
import btnIcon from "../assets/flashlight.svg";
import fileUploadIcon from "../assets/attachment.svg";
import closeIcon from "../assets/close.svg";
import { MESSAGES } from "../constants";
import { toastUtils } from '../utils'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const QrScanner: React.FC<IQrScannerProps> = ({
  onScanSuccess,
  onError,
  config,
  renderSuccessState,
  renderErrorState,
  enableTorchToggle = true,
  enableCameraSwitching = false,
  enableFileUpload = true,
  show = false,
  onClose,
}) => {
  const [torchEnabled, setTorchEnabled] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scanError, setScanError] = useState<Error | null>(null);
  const [availableCameras, setAvailableCameras] = useState<ICameraConfig[]>([]);
  const [selectedCameraId, setSelectedCameraId] = useState<string>("");
  const [scanSuccess, setScanSuccess] = useState(false);
  const [loadingScanner, setLoadingScanner] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const containerWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleScanSuccess = useCallback(
    (data: string) => {
      setScanResult(data);
      setScanError(null);
      setScanSuccess(true);
      onScanSuccess(data);
      if (!renderSuccessState) {
        // toastUtils.qrScanner.success(MESSAGES.TOAST.QR_SCANNED_SUCCESS);
      }

      // Reset success state after a delay
      setTimeout(() => {
        setScanSuccess(false);
      }, 1000);
    },
    [onScanSuccess, renderSuccessState]
  );

  const handleError = useCallback(
    (error: Error) => {
      setScanError(error);
      setScanResult(null);
      setScanSuccess(false);
      onError?.(error);

      if (renderErrorState) return;
      if (error instanceof QRScannerCustomError) {
        switch (error.type) {
          case QRScannerErrorType.CAMERA_ACCESS_DENIED:
            toastUtils.qrScanner.cameraAccessDenied(MESSAGES.TOAST.CAMERA_ACCESS_DENIED);
            break;

          case QRScannerErrorType.NO_CAMERA_FOUND:
            toastUtils.qrScanner.noCameraFound(MESSAGES.TOAST.NO_CAMERA_FOUND);
            break;

          case QRScannerErrorType.TORCH_NOT_SUPPORTED:
            toastUtils.qrScanner.torchNotSupported(`${error.message}`);
            break;

          case QRScannerErrorType.SCANNER_START_FAILED:
            toastUtils.qrScanner.scannerFailed(MESSAGES.TOAST.SCANNER_START_FAILED);
            break;
          case QRScannerErrorType.SCANNER_NOT_INITIALIZED:
            toastUtils.qrScanner.scannerFailed(MESSAGES.TOAST.SCANNER_NOT_INITIALIZED);
            break;

          case QRScannerErrorType.FILE_SCAN_FAILED:
            toastUtils.qrScanner.fileScanFailed(MESSAGES.TOAST.FILE_SCAN_FAILED);
            break;

          default:
            console.warn("Unhandled QRScannerCustomError:", error);
            break;
        }
      }
    },
    [onError, renderErrorState]
  );

  const {
    containerRef,
    switchCamera,
    toggleTorch,
    scanFile,
    getCameras,
    isTorchAvailable: _isTorchAvailable,
    stop,
  } = useScanner({
    onScanSuccess: handleScanSuccess,
    onError: handleError,
    config,
    setLoadingScanner,
  });

  const handleTorchToggle = useCallback(async () => {
    try {
      const newState = !torchEnabled;
      await toggleTorch?.(newState);
      setTorchEnabled(newState);
    } catch (error: any) {
      handleError(error || MESSAGES.ERROR.FAILED_TO_TOGGLE_TORCH);
    }
  }, [torchEnabled, toggleTorch, handleError]);

  const handleCameraChange = useCallback(
    async (cameraId: string) => {
      if (!cameraId) return;
      try {
        await switchCamera?.(cameraId, config);
        setSelectedCameraId(cameraId);
      } catch (error) {
        handleError(new Error(MESSAGES.ERROR.FAILED_TO_SWITCH_CAMERA));
      }
    },
    [switchCamera, config, handleError]
  );

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && scanFile) {
        try {
          const result = await scanFile(file);
          handleScanSuccess(result);
          // Reset the file input so the same file can be selected again
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        } catch (error) {
          // Reset the file input even on error
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }

          // Preserve the original error if it's already a QRScannerCustomError
          if (error instanceof QRScannerCustomError) {
            handleError(error);
          } else {
            // Create a new QRScannerCustomError for unexpected errors
            handleError(
              new QRScannerCustomError(
                QRScannerErrorType.FILE_SCAN_FAILED,
                MESSAGES.ERROR.FAILED_TO_SCAN_FILE,
                error as Error
              )
            );
          }
        }
      }
    },
    [scanFile, handleScanSuccess, handleError]
  );

  const handleClose = useCallback(async () => {
    try {
      await stop?.();
    } catch (error) {
      console.warn("Failed to stop scanner:", error);
    } finally {
      onClose?.();
    }
  }, [stop, onClose]);

  useEffect(() => {
    const init = async () => {
      if (!availableCameras.length) {
        try {
          if (getCameras) {
            const cameras = await getCameras();
            setAvailableCameras([...cameras]);
          }
        } catch (error) {
          handleError(error as Error);
          setAvailableCameras([]);
        }
      }
    };

    if (show) {
      init();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="container-wrapper" ref={containerWrapperRef}>
      <div className="top-controls">
        <button onClick={handleClose} className="icon-btn">
          <img src={closeIcon} alt={MESSAGES.ALT_TEXT.CLOSE} className="icon-img" />
        </button>
        {enableTorchToggle && (
          <button onClick={handleTorchToggle} className="icon-btn">
            <img src={btnIcon} alt={MESSAGES.ALT_TEXT.TOGGLE_TORCH} className="icon-img" />
          </button>
        )}
      </div>
      <div className="scanner-area">
        <div className="qr-scanner-frame">
          <div className={`corner top-left ${scanSuccess ? "success" : ""}`} />
          <div className={`corner top-right ${scanSuccess ? "success" : ""}`} />
          <div
            className={`corner bottom-left ${scanSuccess ? "success" : ""}`}
          />
          <div
            className={`corner bottom-right ${scanSuccess ? "success" : ""}`}
          />
        </div>
        <div ref={containerRef} id="qr-reader" className="scanner-video" />
        {(scanSuccess || loadingScanner) && (
          <div className="notification-overlay">
            <div className="notification-message">
              {scanSuccess ? (
                <span className="scanned-message">{MESSAGES.UI.SCANNED_STATUS}</span>
              ) : (
                <>
                  <div className="loading-spinner"></div>
                  <span>{MESSAGES.UI.INITIALIZING_CAMERA}</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {renderSuccessState && scanResult && (
        <div className="custom-success">{renderSuccessState(scanResult)}</div>
      )}
      {renderErrorState && scanError && (
        <div className="custom-error">{renderErrorState(scanError)}</div>
      )}
      <div className="bottom-controls">
        {enableCameraSwitching && availableCameras.length > 1 && (
          <select
            onChange={(e) => handleCameraChange(e.target.value)}
            value={selectedCameraId}
            id="camera-select"
          >
            <option value="" disabled>
              {MESSAGES.UI.SWITCH_CAMERA}
            </option>
            {availableCameras.map((camera, index) => (
              <option key={index} value={camera.deviceId}>
                {camera.label || MESSAGES.CAMERA.DEFAULT_LABEL(camera.deviceId)}
              </option>
            ))}
          </select>
        )}
        {enableFileUpload && (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="icon-btn file-input-btn"
            >
              <img
                src={fileUploadIcon}
                alt={MESSAGES.ALT_TEXT.FILE_UPLOAD}
                className="icon-img"
              />
            </button>
          </>
        )}
      </div>
      <ToastContainer style={{ zIndex: 9999 }} />
    </div>
  );
};
