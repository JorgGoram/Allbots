
/**
 * Formats a number with commas (e.g., 1000 becomes 1,000)
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Truncates text to a specified length and adds ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Generates a random ID (useful for keys in lists)
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Checks if the device is mobile based on screen width
 */
export const isMobile = (): boolean => {
  return window.innerWidth < 768;
};

/**
 * Scrolls to an element with smooth behavior
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Determines appropriate file path for assets in development vs production
 */
export const getAssetPath = (path: string): string => {
  // In a real implementation, this would handle different environments
  return `/assets/${path}`;
};

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 */
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
};
