import { useEffect } from 'react';
import { ANALYTICS_CONFIG } from '../config/analytics';

const Analytics = () => {
  useEffect(() => {
    // Only initialize analytics in production or if explicitly enabled
    if (!ANALYTICS_CONFIG.ENABLED) {
      if (ANALYTICS_CONFIG.DEBUG) {
        console.log('🔍 Analytics disabled in development mode');
        console.log('To enable: set REACT_APP_ANALYTICS_ENABLED=true');
      }
      return;
    }

    // Initialize Google Analytics 4
    if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initializeGA4();
    } else if (ANALYTICS_CONFIG.DEBUG) {
      console.log('⚠️ GA4 Measurement ID not configured');
    }

    // Initialize Google Tag Manager (if configured)
    if (ANALYTICS_CONFIG.GTM_ID && ANALYTICS_CONFIG.GTM_ID !== 'GTM-XXXXXXX') {
      initializeGTM();
    } else if (ANALYTICS_CONFIG.DEBUG) {
      console.log('ℹ️ GTM ID not configured (optional)');
    }
  }, []);

  const initializeGA4 = () => {
    // Load Google Analytics 4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
      page_title: 'Fotralife - Coming Soon',
      page_location: window.location.href,
    });
  };

  const initializeGTM = () => {
    // Google Tag Manager script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${ANALYTICS_CONFIG.GTM_ID}');
    `;
    document.head.appendChild(script);

  };

  // This component doesn't render anything
  return null;
};

// Analytics utility functions for tracking events
export const trackEvent = (eventName, parameters = {}) => {
  if (ANALYTICS_CONFIG.ENABLED && window.gtag) {
    window.gtag('event', eventName, parameters);
    if (ANALYTICS_CONFIG.DEBUG) {
      console.log('📊 Event tracked:', eventName, parameters);
    }
  } else if (ANALYTICS_CONFIG.DEBUG) {
    console.log('🔍 Event would be tracked:', eventName, parameters);
  }
};

export const trackPageView = (pagePath) => {
  if (ANALYTICS_CONFIG.ENABLED && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
      page_path: pagePath,
    });
    if (ANALYTICS_CONFIG.DEBUG) {
      console.log('📄 Page view tracked:', pagePath);
    }
  } else if (ANALYTICS_CONFIG.DEBUG) {
    console.log('🔍 Page view would be tracked:', pagePath);
  }
};

export default Analytics; 