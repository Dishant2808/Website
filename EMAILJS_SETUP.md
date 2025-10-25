# EmailJS Setup Guide

To make the contact form work and send emails to the admin, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello Admin,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}

You can reply directly to: {{reply_to}}

Best regards,
Your Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Environment Variables
Update your `.env` file with the actual values:

```env
# Admin Email Configuration
VITE_ADMIN_EMAIL=your-admin@email.com

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your admin email for the message

## Troubleshooting
- Make sure all environment variables are correctly set
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template uses the correct variable names
