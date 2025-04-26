// Helper utilities for the landing page

/**
 * Format a number with commas (e.g., 1000 -> 1,000)
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Truncate a string if it exceeds maxLength
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/**
 * Convert a hex color to rgba
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Check if a device is mobile/tablet based on screen width
 */
export const isMobile = (): boolean => {
  return window.innerWidth <= 768;
};

export const isTablet = (): boolean => {
  return window.innerWidth <= 1024 && window.innerWidth > 768;
};

/**
 * Generate random number between min and max (inclusive)
 */
export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Debounce a function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle a function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Get viewport dimensions
 */
export const getViewportDimensions = (): { width: number; height: number } => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

/**
 * Split array into chunks of specified size
 */
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

/**
 * Checks if the current viewport is mobile sized
 * @returns Boolean indicating if viewport is mobile sized
 */
export const isMobileViewport = (): boolean => {
  return window.innerWidth < 768;
};

/**
 * Checks if the current viewport is tablet sized
 * @returns Boolean indicating if viewport is tablet sized
 */
export const isTabletViewport = (): boolean => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};


/**
 * Generates a random ID string
 * @returns Random ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
};

/**
 * Converts a hex color to RGB values
 * @param hex Hex color string (with or without #)
 * @returns Object with r, g, b values
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Converts RGB values to a hex color
 * @param r Red value (0-255)
 * @param g Green value (0-255)
 * @param b Blue value (0-255)
 * @returns Hex color string with #
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
};

/**
 * Clamps a number between min and max values
 * @param num Number to clamp
 * @param min Minimum value
 * @param max Maximum value
 * @returns Clamped number
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

/**
 * Gets the appropriate breakpoint value based on viewport width
 * @param mobile Value for mobile viewport
 * @param tablet Value for tablet viewport
 * @param desktop Value for desktop viewport
 * @returns The appropriate value based on current viewport
 */
export const responsiveValue = <T>(mobile: T, tablet: T, desktop: T): T => {
  if (isMobileViewport()) return mobile;
  if (isTabletViewport()) return tablet;
  return desktop;
};