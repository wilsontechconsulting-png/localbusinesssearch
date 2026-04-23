# Web3Forms Setup Guide - 100% Free Contact Form

## ✅ Why Web3Forms?

- **Completely Free** - No limits, no paid tiers
- **Works Anywhere** - GitHub Pages, Vercel, Netlify, or any static hosting
- **No Backend Needed** - Pure client-side form submission
- **Spam Protection** - Built-in honeypot and reCAPTCHA support
- **Email Notifications** - Get emails at jed@powerofadvertising.com
- **Open Source** - Trustworthy and transparent

---

## 🚀 QUICK SETUP (5 Minutes)

### Step 1: Get Your Free Access Key

1. Go to: **https://web3forms.com**
2. Enter your email: `jed@powerofadvertising.com`
3. Click "Create Access Key"
4. Check your email for the access key (looks like: `abc123def-456-789-ghi-jkl012mno345`)
5. Copy the access key

### Step 2: Add Access Key to Contact Form

1. Open: `/themes/lbs/layouts/section/contact.html`
2. Find line 27 (around there):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### Step 3: Update Success Redirect URL

1. In the same file, find line 30:
   ```html
   <input type="hidden" name="redirect" value="https://yourdomain.com/contact/success/">
   ```
2. Replace `https://yourdomain.com` with your actual domain when deployed
3. For local testing, you can use: `http://localhost:1314/contact/success/`

### Step 4: Test It!

1. Go to: http://localhost:1314/contact/
2. Fill out the form
3. Click "Send Message"
4. You should see "Sending..." then redirect to success page
5. Check `jed@powerofadvertising.com` for the email!

---

## 📧 Email Configuration

The form is already configured to send to: **jed@powerofadvertising.com**

This is set on line 33:
```html
<input type="hidden" name="email" value="jed@powerofadvertising.com">
```

**To change the recipient email:**
- Just update that value to any email address you want

---

## 🎨 Form Fields Included

The form captures:
- ✅ **Name** (required)
- ✅ **Email** (required)
- ✅ **Phone** (optional)
- ✅ **Business Name** (required)
- ✅ **Industry** (dropdown, required)
- ✅ **Message** (required)

All fields are sent to your email in a clean format.

---

## 🛡️ Spam Protection

The form includes:
- **Honeypot field** (hidden checkbox that bots fill out)
- **Web3Forms' built-in spam filtering**
- Optional: You can enable reCAPTCHA v3 in Web3Forms dashboard

---

## 📱 How It Works

1. User fills out the form on your site
2. Form submits to Web3Forms API (https://api.web3forms.com/submit)
3. Web3Forms sends email to jed@powerofadvertising.com
4. User gets redirected to /contact/success/ page
5. You receive a formatted email with all the form data

---

## 🎯 Email Format You'll Receive

```
From: Web3Forms <noreply@web3forms.com>
Reply-To: [user's email]
Subject: New Contact Form Submission from LBS Website

Name: John Smith
Email: john@example.com
Phone: (555) 123-4567
Business: Smith HVAC
Industry: Home Services
Message: We need help with lead follow-up...
```

---

## 🔧 Advanced Configuration (Optional)

### Custom Email Subject

Already set on line 36:
```html
<input type="hidden" name="subject" value="New Contact Form Submission from LBS Website">
```

### From Name

Add this hidden field if you want:
```html
<input type="hidden" name="from_name" value="LBS Contact Form">
```

### Enable reCAPTCHA v3

1. Go to Web3Forms dashboard
2. Enable reCAPTCHA for your access key
3. Add your site domain
4. No code changes needed!

---

## ✅ Design Maintained

All styling remains **exactly the same** as the original design:
- ✅ Card-based layout with shadows
- ✅ Blue border around form card
- ✅ Form validation (green/red borders)
- ✅ Focus states on inputs
- ✅ Loading state on button ("Sending...")
- ✅ Mobile responsive
- ✅ Matches site design system

---

## 🧪 Testing Checklist

### Local Testing:
- [ ] Form loads properly
- [ ] All fields validate correctly
- [ ] Button shows "Sending..." on submit
- [ ] Success page redirect works
- [ ] Alternative contact info displays

### After Getting Access Key:
- [ ] Submit test form
- [ ] Check jed@powerofadvertising.com for email
- [ ] Verify all form data appears in email
- [ ] Test from mobile device
- [ ] Test spam protection (leave honeypot checked)

### After Deploying:
- [ ] Update redirect URL to production domain
- [ ] Test form submission on live site
- [ ] Verify emails arrive
- [ ] Test from different browsers

---

## 🆘 Troubleshooting

### Form Not Submitting?
- Check console for errors (F12 in browser)
- Verify access key is correct
- Make sure you're not using quotes inside the access key value

### Not Receiving Emails?
- Check spam folder
- Verify access key email matches recipient email
- Wait a few minutes (sometimes delayed)
- Check Web3Forms dashboard for submission logs

### Success Page Not Loading?
- Verify redirect URL is correct
- Check that /contact/success/ page exists
- For local testing, use full localhost URL

---

## 💰 Cost Breakdown

**Web3Forms:** $0/month (100% free forever)
**Hugo Hosting (GitHub Pages):** $0/month
**Total Monthly Cost:** $0 🎉

Compare to:
- Netlify Forms: $19/month for 100 submissions
- Formspree: $10/month for 100 submissions
- EmailJS: $6/month for 200 emails

---

## 📚 Resources

- **Web3Forms Website:** https://web3forms.com
- **Documentation:** https://docs.web3forms.com
- **GitHub:** https://github.com/web3forms
- **Support:** hello@web3forms.com

---

## ✅ Status: Ready to Use!

Once you add your access key, the contact form is:
- ✅ Fully functional
- ✅ Beautifully designed
- ✅ Spam protected
- ✅ Mobile responsive
- ✅ Free forever
- ✅ Works on any hosting

**Just add your access key and you're done!** 🚀

---

## 🔄 Quick Reference

**File to Edit:**
```
/themes/lbs/layouts/section/contact.html
```

**Line to Update (approximately line 27):**
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

**Where to Get Key:**
https://web3forms.com

**Recipient Email:**
jed@powerofadvertising.com

**Success Page:**
/contact/success/

---

That's it! Simple, free, and professional. 🎯
