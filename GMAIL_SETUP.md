# Gmail SMTP Setup Guide

## 🔐 Gmail Authentication Issue

The error shows: `535-5.7.8 Username and Password not accepted`

This happens because Gmail requires **App Passwords** for SMTP authentication.

## 🛠️ How to Fix:

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click **App passwords** (under "Signing in to Google")
3. Select **Mail** and **Other (Custom name)**
4. Enter "Krishna WebWorks SMTP"
5. Click **Generate**
6. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 3: Update Backend .env
Replace the password in `backend/.env`:

```env
MAIL_PASSWORD=your_16_character_app_password
```

**Important:** 
- Use the **App Password**, not your regular Gmail password
- Remove spaces from the app password
- Example: `MAIL_PASSWORD=abcdefghijklmnop`

### Step 4: Restart Backend
```bash
cd backend
npm start
```

## 🧪 Test the Setup

1. **Check Health:** `curl http://localhost:3001/health`
2. **Test Email:** Submit the contact form
3. **Check Gmail:** Look for the email in your inbox

## 🔍 Troubleshooting

### If still getting authentication errors:
1. **Verify App Password:** Make sure you're using the 16-character app password
2. **Check 2FA:** Ensure 2-Factor Authentication is enabled
3. **Less Secure Apps:** Try enabling "Less secure app access" (not recommended)
4. **OAuth2:** Consider using OAuth2 instead of App Passwords

### Alternative: Use OAuth2
For production, consider using OAuth2 instead of App Passwords for better security.

## ✅ Success Indicators

When working correctly, you should see:
```
✅ SMTP Server is ready to send emails
🚀 SMTP Server running on port 3001
📧 Admin email: davin.t1611@gmail.com
```
