# 🚀 Deploying Fotralife to Netlify

This guide covers multiple ways to deploy your React project to Netlify.

## 📋 **Pre-Deployment Checklist**

- [ ] Project builds successfully (`npm run build`)
- [ ] Google Analytics ID ready (if using analytics)
- [ ] All links tested and working
- [ ] Countdown timer working properly

## 🎯 **Method 1: Drag & Drop Deployment (Quickest)**

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Deploy manually"
3. Drag the `build` folder to the deployment area
4. Wait for deployment to complete
5. Your site will be live with a random subdomain like `amazing-cupcake-123.netlify.app`

### Step 3: Configure Environment Variables (Optional)
1. Go to Site settings → Environment variables
2. Add your analytics variables:
   ```
   REACT_APP_GA4_ID = G-XXXXXXXXXX
   REACT_APP_GTM_ID = GTM-XXXXXXX
   REACT_APP_ANALYTICS_ENABLED = true
   ```
3. Redeploy the site for changes to take effect

---

## 🔄 **Method 2: Git Integration (Recommended)**

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Fotralife React app"
```

### Step 2: Push to GitHub/GitLab
```bash
# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/fotralife-launch.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and login
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: build
   ```
6. Click "Deploy site"

### Step 4: Configure Environment Variables
1. Go to Site settings → Environment variables
2. Add variables:
   ```
   REACT_APP_GA4_ID = G-XXXXXXXXXX
   REACT_APP_GTM_ID = GTM-XXXXXXX
   REACT_APP_ANALYTICS_ENABLED = true
   ```

---

## 🌐 **Method 3: Netlify CLI (Advanced)**

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login and Deploy
```bash
# Login to Netlify
netlify login

# Deploy (first time)
netlify deploy --prod --dir=build

# For subsequent deployments
netlify deploy --prod --dir=build
```

---

## ⚙️ **Advanced Configuration**

### Custom Domain Setup
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `fotralife.com`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

### Build Settings File
Create `netlify.toml` in project root:

```toml
[build]
  publish = "build"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Redirect all requests to index.html for SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Form Handling (Future)
If you add contact forms later:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

---

## 🔧 **Environment Variables Guide**

### Required for Analytics:
```bash
REACT_APP_GA4_ID=G-XXXXXXXXXX        # Google Analytics 4 ID
REACT_APP_GTM_ID=GTM-XXXXXXX         # Google Tag Manager ID (optional)
REACT_APP_ANALYTICS_ENABLED=true     # Enable tracking in production
```

### Setting in Netlify:
1. Site settings → Environment variables
2. Click "Add variable"
3. Enter key and value
4. Save and redeploy

---

## 🎨 **Custom Subdomain**

Change from `random-name-123.netlify.app` to `fotralife.netlify.app`:

1. Go to Site settings → Domain management
2. Click "Options" on the Netlify subdomain
3. Click "Edit site name"
4. Enter `fotralife` (if available)
5. Save changes

---

## 📊 **Monitoring & Analytics**

### Netlify Analytics
- Go to your site dashboard
- Click "Analytics" tab
- View traffic, performance, and user data

### Google Analytics
- Once deployed with `REACT_APP_GA4_ID` set
- Check Google Analytics dashboard
- Verify tracking is working

---

## 🚨 **Troubleshooting**

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Analytics Not Working
1. Check environment variables are set correctly
2. Verify GA4 ID format: `G-XXXXXXXXXX`
3. Check browser console for errors
4. Ensure `REACT_APP_ANALYTICS_ENABLED=true` in production

### Assets Not Loading
- Ensure all image paths use `/assets/` (not `assets/`)
- Check `public/assets/` folder exists
- Verify build output includes assets

---

## ✅ **Post-Deployment Checklist**

- [ ] Site loads correctly
- [ ] Countdown timer is running
- [ ] All links open in new tabs
- [ ] Social media links work
- [ ] Email link opens mail client
- [ ] Google Analytics tracking (if configured)
- [ ] Mobile responsiveness
- [ ] Page speed (check with Lighthouse)

---

## 🔄 **Automatic Deployments**

With Git integration:
- Push to main branch → Auto-deploy to production
- Create pull request → Deploy preview
- Rollback available in Netlify dashboard

---

Your site will be live at: `https://your-site-name.netlify.app`

For custom domain: `https://fotralife.com` 