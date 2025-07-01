// Analytics Configuration
// Replace these values with your actual tracking IDs

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Measurement ID
  // Get this from: https://analytics.google.com/
  // Format: G-XXXXXXXXXX
  GA4_MEASUREMENT_ID: process.env.REACT_APP_GA4_ID || 'G-XXXXXXXXXX',
  
  // Google Tag Manager ID (optional)
  // Get this from: https://tagmanager.google.com/
  // Format: GTM-XXXXXXX
  GTM_ID: process.env.REACT_APP_GTM_ID || 'GTM-XXXXXXX',
  
  // Facebook Pixel ID (optional)
  // Get this from: https://business.facebook.com/
  // Format: Numbers only
  FACEBOOK_PIXEL_ID: process.env.REACT_APP_FB_PIXEL_ID || '',
  
  // Enable/disable tracking
  ENABLED: process.env.NODE_ENV === 'production' || process.env.REACT_APP_ANALYTICS_ENABLED === 'true',
  
  // Debug mode
  DEBUG: process.env.NODE_ENV === 'development',
  
  // Custom events to track
  EVENTS: {
    PAGE_VIEW: 'page_view',
    SOCIAL_CLICK: 'social_media_click',
    EMAIL_CLICK: 'email_click',
    FOOTER_CLICK: 'footer_link_click',
    COUNTDOWN_VIEW: 'countdown_view',
    LOGO_CLICK: 'logo_click',
  }
};

// Event tracking presets
export const TRACKING_EVENTS = {
  // Social Media Platforms
  SOCIAL_PLATFORMS: {
    INSTAGRAM: 'instagram',
    YOUTUBE: 'youtube',
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    LINKEDIN: 'linkedin',
  },
  
  // Page Sections
  SECTIONS: {
    HEADER: 'header',
    HERO: 'hero',
    TEAM: 'team',
    FOOTER: 'footer',
    SOCIAL_LINKS: 'social_links',
  },
  
  // User Actions
  ACTIONS: {
    CLICK: 'click',
    VIEW: 'view',
    CONTACT: 'contact_attempt',
    EXTERNAL_LINK: 'external_link',
  }
}; 