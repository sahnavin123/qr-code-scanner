import { useState } from "react";
import "./App.css";

// Import examples
import { 
  BasicQrScanner, 
  MinimalQrScanner, 
  AdvancedQrScanner,
  exampleConfigs 
} from "./examples";

type ExampleType = 'basic' | 'minimal' | 'advanced';

function App() {
  const [selectedExample, setSelectedExample] = useState<ExampleType>('basic');

  const renderExample = () => {
    switch (selectedExample) {
      case 'basic':
        return <BasicQrScanner />;
      case 'minimal':
        return <MinimalQrScanner />;
      case 'advanced':
        return <AdvancedQrScanner />;
      default:
        return <BasicQrScanner />;
    }
  };

  return (
    <div className="app">
      <h1 className="heading">QR Code Scanner Examples</h1>

      {/* Example Selector */}
      <div className="example-selector">
        <h3 className="selector-title">Choose an Example</h3>
        <div className="example-grid">
          {Object.entries(exampleConfigs).map(([key, config]) => (
            <div
              key={key}
              className={`example-card ${selectedExample === key ? 'active' : ''}`}
              onClick={() => setSelectedExample(key as ExampleType)}
            >
              <div className="card-title">{config.name}</div>
              <div className="card-description">{config.description}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Render Selected Example */}
      {renderExample()}
    </div>
  );
}

export default App;
