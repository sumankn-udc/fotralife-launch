/**
 * Scroll utilities for better navigation experience
 */

/**
 * Scrolls to the top of the page immediately
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
};

/**
 * Scrolls to the top of the page with smooth animation
 */
export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/**
 * Scrolls to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 */
export const scrollToElement = (elementId, smooth = true) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start'
    });
  }
};

/**
 * Scrolls to a specific position on the page
 * @param {number} top - The top position to scroll to
 * @param {boolean} smooth - Whether to use smooth scrolling (default: false)
 */
export const scrollToPosition = (top, smooth = false) => {
  window.scrollTo({
    top,
    left: 0,
    behavior: smooth ? 'smooth' : 'auto'
  });
}; 