/**
 * Utility functions for environment detection
 */
/**
 * Check if the code is running in a browser environment
 * @returns true if running in browser, false if running in Node.js/SSR
 */
export declare const isBrowser: () => boolean;
/**
 * Check if the code is running in a server environment
 * @returns true if running in Node.js/SSR, false if running in browser
 */
export declare const isServer: () => boolean;
/**
 * Safely access document object
 * @returns document if available, null otherwise
 */
export declare const getDocument: () => Document | null;
/**
 * Safely access navigator object
 * @returns navigator if available, null otherwise
 */
export declare const getNavigator: () => Navigator | null;
/**
 * Safely access window object
 * @returns window if available, null otherwise
 */
export declare const getWindow: () => Window | null;
