# Fotralife Launch - React Version

This is a React.js conversion of the original HTML/CSS/JS Fotralife coming soon page.

## 🚀 Features

- **Coming Soon Page** with countdown timer
- **Responsive Design** that works on all devices
- **Social Media Links** (Instagram, YouTube)
- **Modern React Architecture** with functional components and hooks
- **Animated Elements** using WOW.js
- **Bootstrap 4** for responsive grid system

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js       # Logo and contact information
│   ├── Hero.js         # Main hero section with title and countdown
│   ├── Countdown.js    # React countdown timer
│   ├── Team.js         # Team section and social media links
│   └── Footer.js       # Footer with credits
├── App.js              # Main application component
└── index.js            # React DOM entry point

public/
├── assets/             # Static assets (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── img/
└── index.html          # HTML template
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `build/` directory.

## 🔧 Customization

### Google Analytics Setup

To enable Google Analytics tracking:

1. **Create a `.env.local` file** in the project root:
   ```bash
   # Google Analytics 4 Measurement ID
   REACT_APP_GA4_ID=G-XXXXXXXXXX

   # Google Tag Manager ID (optional)  
   REACT_APP_GTM_ID=GTM-XXXXXXX

   # Enable in development (optional)
   REACT_APP_ANALYTICS_ENABLED=false
   ```

2. **Get your tracking IDs:**
   - **GA4**: Get from [Google Analytics](https://analytics.google.com/) (format: G-XXXXXXXXXX)
   - **GTM**: Get from [Google Tag Manager](https://tagmanager.google.com/) (format: GTM-XXXXXXX)

3. **Analytics will automatically:**
   - Track page views
   - Track social media clicks
   - Track email clicks
   - Track footer link clicks
   - Only run in production (unless `REACT_APP_ANALYTICS_ENABLED=true`)

### Countdown Target Date

To change the countdown target date, edit `src/components/Countdown.js`:

```jsx
const targetTime = new Date("2025-07-09T23:59:59").getTime();
```

### Social Media Links

Update the social media links in `src/components/Team.js`:

```jsx
<a href="https://www.instagram.com/fotralife/">
<a href="https://www.youtube.com/@fotralife">
```

### Styling

All original CSS files are preserved in `public/assets/css/`. The styling remains exactly the same as the original HTML version.

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px  
- **Mobile:** Below 768px

## 🎨 Technologies Used

- **React 18** - Modern React with hooks
- **Bootstrap 4** - Responsive grid system
- **WOW.js** - Scroll animations
- **LineIcons** - Icon font
- **Custom CSS** - Original styling preserved

## 🔄 Migration from HTML

This React version maintains:
- ✅ All original styling and animations
- ✅ Responsive behavior
- ✅ Countdown functionality (converted to React hooks)
- ✅ WOW.js animations
- ✅ All assets and images
- ✅ Social media links

## 📞 Contact

For questions about this project, contact: info@fotralife.com

## 🏢 Credits

- **Designed and Developed by:** [Undash-cop Pvt Ltd](https://undash-cop.com)
- **Part of:** [Undash-cop](https://undash-cop.com) 