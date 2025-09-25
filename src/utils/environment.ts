/**
 * Utility functions for environment detection
 */

/**
 * Check if the code is running in a browser environment
 * @returns true if running in browser, false if running in Node.js/SSR
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof document !== 'undefined' && 
         typeof navigator !== 'undefined';
};

/**
 * Check if the code is running in a server environment
 * @returns true if running in Node.js/SSR, false if running in browser
 */
export const isServer = (): boolean => {
  return !isBrowser();
};

/**
 * Safely access document object
 * @returns document if available, null otherwise
 */
export const getDocument = (): Document | null => {
  return isBrowser() ? document : null;
};

/**
 * Safely access navigator object
 * @returns navigator if available, null otherwise
 */
export const getNavigator = (): Navigator | null => {
  return isBrowser() ? navigator : null;
};

/**
 * Safely access window object
 * @returns window if available, null otherwise
 */
export const getWindow = (): Window | null => {
  return isBrowser() ? window : null;
};