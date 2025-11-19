# Deployment Instructions

## Push to GitHub

After creating your GitHub repository, run these commands:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**
7. Your app will be live in ~2 minutes!

Your app will be available at: `https://your-project-name.vercel.app`

## Environment Variables

If you need to add environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

