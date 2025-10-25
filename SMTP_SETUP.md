# SMTP Setup Guide (Alternative to EmailJS)

If you prefer to use SMTP directly instead of EmailJS, here's how to set it up:

## Option 1: Simple SMTP with Nodemailer (Backend Required)

### Step 1: Create Backend Server
```bash
mkdir backend
cd backend
npm init -y
npm install express nodemailer cors dotenv
```

### Step 2: Create server.js
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// SMTP Configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

### Step 3: Environment Variables (.env)
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@yourcompany.com
```

### Step 4: Update Frontend Contact Form
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    if (result.success) {
      setNotification({
        show: true,
        message: 'Thank you for your message! We\'ll get back to you soon.',
        type: 'success'
      });
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    setNotification({
      show: true,
      message: 'Sorry, there was an error sending your message.',
      type: 'error'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 2: Serverless Functions (Vercel/Netlify)

### Vercel API Route (api/send-email.js)
```javascript
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    const { name, email, company, message } = req.body;
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
```

## Comparison: EmailJS vs SMTP

| Feature | EmailJS (Free) | SMTP (Nodemailer) |
|---------|----------------|-------------------|
| **Setup Complexity** | ⭐ Easy | ⭐⭐ Medium |
| **Server Required** | ❌ No | ✅ Yes |
| **Cost** | Free | Free (with hosting) |
| **Security** | ⭐⭐ Good | ⭐⭐⭐ Better |
| **Customization** | ⭐⭐ Limited | ⭐⭐⭐ Full control |
| **Rate Limits** | Yes (free plan) | Depends on provider |

## Recommendation

**For your use case, I recommend EmailJS** because:
1. ✅ **Free and easy** - No backend setup needed
2. ✅ **Perfect for contact forms** - Designed exactly for this
3. ✅ **Secure** - No credentials exposed in frontend
4. ✅ **Reliable** - Handles rate limiting and spam protection

Would you like me to help you set up EmailJS, or would you prefer the SMTP approach?
