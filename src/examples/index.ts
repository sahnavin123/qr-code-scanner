// Export all examples for easy importing
export { BasicQrScanner } from './BasicQrScanner';
export { MinimalQrScanner } from './MinimalQrScanner';
export { AdvancedQrScanner } from './AdvancedQrScanner';

// Example configurations for different use cases
export const exampleConfigs = {
  basic: {
    name: 'Basic QR Scanner',
    description: 'Standard QR scanner with history and full features',
    component: 'BasicQrScanner'
  },
  minimal: {
    name: 'Minimal QR Scanner',
    description: 'Simple, lightweight QR scanner',
    component: 'MinimalQrScanner'
  },
  advanced: {
    name: 'Advanced QR Scanner',
    description: 'Feature-rich scanner with configurable settings',
    component: 'AdvancedQrScanner'
  }
};