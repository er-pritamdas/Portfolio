# Backend Deployment Instructions

This backend is built with Node.js and Express. It uses Nodemailer for sending emails.

## Prerequisites

- Node.js installed
- A Gmail account (or other SMTP provider)
- If using Gmail, you must generate an **App Password** (Account > Security > 2-Step Verification > App passwords).

## Environment Variables

Create a `.env` file in the `server` directory (or set these in your deployment platform):

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
DESTINATION_EMAIL=er.pritamdas22@gmail.com
```

## Deployment Options

### 1. Render (Recommended for Free Tier)

1.  Create a new **Web Service** on Render.
2.  Connect your GitHub repository.
3.  **Root Directory**: `server` (Important!)
4.  **Build Command**: `npm install`
5.  **Start Command**: `node server.js`
6.  Add Environment Variables in the Render dashboard.

### 2. Railway

1.  Create a new project on Railway.
2.  Deploy from GitHub repo.
3.  Set the **Root Directory** to `server` in the settings.
4.  Add variables in the **Variables** tab.
5.  Railway automatically detects `package.json` and starts the app.

### 3. Vercel (Serverless)

To deploy as a serverless function on Vercel, you need to add a `vercel.json` in the `server` directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

*Note: You might need to restructure slightly for Vercel serverless functions (exporting `app` instead of listening).*

### 4. AWS EC2

1.  Launch an EC2 instance (Ubuntu).
2.  SSH into the instance.
3.  Install Node.js and npm.
4.  Clone the repo.
5.  Navigate to `server` directory.
6.  `npm install`
7.  Create `.env` file.
8.  Install PM2: `npm install -g pm2`
9.  Start app: `pm2 start server.js --name "portfolio-backend"`

## Frontend Integration

Once deployed, update the `fetch` URL in `src/components/Contact.jsx` to your deployed backend URL (e.g., `https://your-app.onrender.com/api/contact`).
