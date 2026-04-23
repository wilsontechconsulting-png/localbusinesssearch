# 🌐 GODADDY DNS CONFIGURATION FOR LOCALBUSINESSSEARCH.COM

Your website is now live on GitHub Pages and needs DNS configuration to work with your custom domain.

---

## ✅ WEBSITE STATUS

**GitHub Repository:** https://github.com/wilsontechconsulting-png/localbusinesssearch  
**GitHub Pages URL:** https://wilsontechconsulting-png.github.io/localbusinesssearch/  
**Custom Domain:** localbusinesssearch.com  
**Status:** Deploying (will be live in 1-2 minutes)

---

## 📋 DNS RECORDS TO ADD IN GODADDY

Log into your GoDaddy account and go to DNS Management for **localbusinesssearch.com**

### **OPTION 1: Apex Domain (localbusinesssearch.com) - RECOMMENDED**

Add these **4 A records**:

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 seconds (or default)

Type: A
Name: @
Value: 185.199.109.153
TTL: 600 seconds (or default)

Type: A
Name: @
Value: 185.199.110.153
TTL: 600 seconds (or default)

Type: A
Name: @
Value: 185.199.111.153
TTL: 600 seconds (or default)
```

Add this **CNAME record** for www:

```
Type: CNAME
Name: www
Value: wilsontechconsulting-png.github.io
TTL: 1 hour (or default)
```

---

### **OPTION 2: WWW Subdomain (www.localbusinesssearch.com)**

If you prefer www subdomain:

```
Type: CNAME
Name: www
Value: wilsontechconsulting-png.github.io
TTL: 1 hour

Type: CNAME
Name: @
Value: www.localbusinesssearch.com
TTL: 1 hour
```

---

## 🔧 STEP-BY-STEP GODADDY INSTRUCTIONS

### **Step 1: Log Into GoDaddy**
1. Go to https://dcc.godaddy.com/
2. Sign in with your account
3. Click **DNS** next to localbusinesssearch.com

### **Step 2: Delete Existing Records** (if any exist for @ or www)
1. Look for existing **A records** with Name = "@"
2. Look for existing **CNAME records** with Name = "www"
3. Click the trash icon to delete them
4. Click **Save** (if prompted)

### **Step 3: Add A Records**
1. Click **Add** button
2. Select **Type:** A
3. **Name:** @ (this represents the root domain)
4. **Value:** 185.199.108.153
5. **TTL:** 600 seconds
6. Click **Save**

7. Repeat for the other 3 IP addresses:
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

### **Step 4: Add CNAME for www**
1. Click **Add** button
2. Select **Type:** CNAME
3. **Name:** www
4. **Value:** wilsontechconsulting-png.github.io
5. **TTL:** 1 Hour
6. Click **Save**

### **Step 5: Save All Changes**
1. Click **Save** or **Save All** at the bottom
2. Wait for confirmation

---

## ⏱️ PROPAGATION TIME

- **Minimum:** 10-30 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

**Check Status:** https://dnschecker.org/#A/localbusinesssearch.com

---

## ✅ VERIFICATION STEPS

### **After 30 Minutes:**

1. **Check DNS Propagation:**
   - Go to: https://dnschecker.org/#A/localbusinesssearch.com
   - Look for green checkmarks
   - Should show: 185.199.108.153 (and the other 3 IPs)

2. **Check Your Site:**
   - Go to: http://localbusinesssearch.com
   - Should load your website (may take up to 2 hours)

3. **HTTPS Verification:**
   - After site loads, wait 5-10 minutes
   - Try: https://localbusinesssearch.com
   - Should have green padlock (SSL certificate auto-issued)

---

## 🔒 HTTPS / SSL CERTIFICATE

GitHub Pages will automatically issue a free SSL certificate for your custom domain.

**This happens automatically after:**
1. DNS records point to GitHub Pages (green checkmarks in DNSChecker)
2. GitHub verifies domain ownership
3. Let's Encrypt issues certificate

**Timeline:** 5-60 minutes after DNS propagation  
**Status:** You'll see green padlock in browser

**If HTTPS doesn't work after 1 hour:**
1. Go to https://github.com/wilsontechconsulting-png/localbusinesssearch/settings/pages
2. Uncheck "Enforce HTTPS" (if checked)
3. Wait 10 minutes
4. Re-check "Enforce HTTPS"
5. Wait another 10 minutes

---

## 📊 FINAL CONFIGURATION

### **Your DNS Should Look Like This:**

```
Type    Name    Value                              TTL
----    ----    -----                              ---
A       @       185.199.108.153                    600
A       @       185.199.109.153                    600
A       @       185.199.110.153                    600
A       @       185.199.111.153                    600
CNAME   www     wilsontechconsulting-png.github.io 3600
```

---

## 🎯 WHAT WILL WORK

After DNS propagates:

✅ **http://localbusinesssearch.com** → Your site  
✅ **http://www.localbusinesssearch.com** → Your site  
✅ **https://localbusinesssearch.com** → Your site (with SSL)  
✅ **https://www.localbusinesssearch.com** → Your site (with SSL)  

All variations will work and redirect to HTTPS automatically!

---

## 🚨 TROUBLESHOOTING

### **Site Not Loading After 2 Hours?**

1. **Check DNS:**
   - https://dnschecker.org/#A/localbusinesssearch.com
   - Should show GitHub IPs globally

2. **Check GitHub Pages Settings:**
   - https://github.com/wilsontechconsulting-png/localbusinesssearch/settings/pages
   - Custom domain should show: localbusinesssearch.com
   - Status should be green checkmark

3. **Check Workflow:**
   - https://github.com/wilsontechconsulting-png/localbusinesssearch/actions
   - Latest run should show green checkmark (successful)

4. **Try Incognito Mode:**
   - Sometimes browser cache causes issues
   - Open incognito/private window
   - Try localbusinesssearch.com

### **Getting "404 - There isn't a GitHub Pages site here"?**

This means DNS is working but the site hasn't deployed yet.

**Fix:**
1. Go to https://github.com/wilsontechconsulting-png/localbusinesssearch/actions
2. Check if workflow is running or failed
3. If failed, click on it to see error
4. If successful but still 404, wait 5-10 more minutes

### **HTTPS Not Working?**

1. Wait 60 minutes after DNS propagates
2. Go to repo settings: https://github.com/wilsontechconsulting-png/localbusinesssearch/settings/pages
3. Look for "HTTPS" section
4. Should say "Certificate issued" or similar
5. If not, toggle "Enforce HTTPS" off and back on

---

## 📞 NEED HELP?

**Check Deployment Status:**  
https://github.com/wilsontechconsulting-png/localbusinesssearch/actions

**GitHub Pages Settings:**  
https://github.com/wilsontechconsulting-png/localbusinesssearch/settings/pages

**DNS Checker:**  
https://dnschecker.org/#A/localbusinesssearch.com

---

## ✅ SUMMARY

**What You Need to Do:**
1. Log into GoDaddy DNS management
2. Delete existing @ and www records (if any)
3. Add 4 A records (185.199.108.153, .109, .110, .111)
4. Add 1 CNAME record (www → wilsontechconsulting-png.github.io)
5. Save changes
6. Wait 30 minutes to 2 hours
7. Visit https://localbusinesssearch.com

**That's it!** Your site will be live at **https://localbusinesssearch.com**

---

**Current Status:** Deploying now via GitHub Actions  
**Estimated Live Time:** 5-10 minutes + DNS propagation  
**Final URL:** https://localbusinesssearch.com

🎉 **Your website is going live!**
