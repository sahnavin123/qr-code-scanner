# 📷 React QR Scanner

A customizable, extensible, and engine-agnostic **QR code scanner** component for React. Built with TypeScript, supports multiple scanning engines like `html5-qrcode`, `zxing-js`, and more.

---

## 🚀 Features

- ✅ **Engine-agnostic** (plug in any scanner implementation)
- 🔐 **Permission handling**
- 🔦 **Torch (flashlight) toggle support**
- 🔄 **Camera switching**
- 🔍 **Zoom control**
- ♻️ **Retry logic** for startup failures
- 🕒 **Throttle/Debounce** to prevent scan spam
- 📁 **File upload** scanning
- ⚙️ **Fully typed & configurable**

---

## 📦 Installation

```
npm install @your-scope/react-qr-scanner
# or
yarn add @your-scope/react-qr-scanner
```

```
[App using <QrScanner>]
        ↓
[QrScanner Component]
        ↓
[useScanner Hook]
        ↓
[engine.start(element, config, onSuccess, onError)]
        ↓
[Camera stream mounted to <div ref={containerRef}>]
        ↓
[Frame-by-frame QR detection]
        ↓
[onScanSuccess() or onError()]

```

```
qr-scanner/
├── node_modules/
├── public/
├── src/
│   ├── assets/                          # Static assets (if needed)
│
│   ├── components/                      # UI components
│   │   └── QrScanner.tsx                # Main QR Scanner component
│
│   ├── core/                            # Core logic and hooks
│   │   ├── engines/                     # Pluggable engine system
│   │   │   ├── interface.ts             # Engine interface contract
│   │   │   └── scanner-engine.ts        # Current scanner engine logic
│   │   └── useScanner.ts                # Main hook to power QR scanning
│
│   ├── enums/
│   │   └── platform.enum.ts             # Enum definitions (like platform type)
│
│   ├── libraries/                       # External libraries wrapped for internal use
│   │   └── html5QrCode/
│   │       └── index.ts   # Adapter for html5-qrcode integration
│
│   ├── test/                            # Test cases
│   │   ├── components/
│   │   │   └── QrScanner.test.ts        # Component tests
│   │   ├── core/
│   │   │   └── useScanner.test.ts       # Hook tests
│   │   └── mocks/                       # (Future) mocks and fixtures for testing
│
│   ├── types/                           # Shared global types/interfaces
│   │   └── qr-scanner.interface.ts      # Props, types, contracts
│
│   ├── utils/                           # Utility functions
│   │   ├── platform.ts                  # Platform-related helpers
│
│   ├── App.tsx                          # App entry (for dev/testing)
│   ├── App.css
│   ├── index.ts                         # Entry point (export package modules)
│   ├── index.css
│   ├── main.tsx                         # Main bootstrap file (if using Vite)
│
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── package.json
├── README.md
└── LICENSE
```
