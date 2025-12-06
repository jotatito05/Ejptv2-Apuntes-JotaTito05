# Deployment Guide: eJPTv2 Notes Viewer

This guide explains how to deploy your eJPTv2 Notes Viewer to **GitHub Pages** so it can be accessed from anywhere.

## Prerequisites
- A GitHub account.
- Git installed on your computer.

## Step 1: Initialize Git (If not already done)
Open a terminal in the project folder (`c:\Users\jtiob\Desktop\.vscode\Apuntes ejptv2\ejptv2-viewer`) and run:

```bash
git init
git add .
git commit -m "Initial commit: eJPTv2 Notes Viewer"
```

## Step 2: Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com) and log in.
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `ejptv2-notes` (or whatever you prefer).
4. Make it **Public** (GitHub Pages is free for public repos).
5. Click **Create repository**.

## Step 3: Push Your Code
Copy the commands shown by GitHub under "…or push an existing repository from the command line" and run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ejptv2-notes.git
git branch -M main
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your actual GitHub username)*

## Step 4: Enable GitHub Pages
1. Go to your repository settings on GitHub.
2. Click on **Pages** in the left sidebar.
3. Under **Source**, select `Deploy from a branch`.
4. Under **Branch**, select `main` and `/ (root)`.
5. Click **Save**.

## Step 5: Access Your Notes
Wait a minute or two. GitHub will provide you with a URL (usually `https://YOUR_USERNAME.github.io/ejptv2-notes/`).

**Click it and enjoy your notes online!** 🚀

---

## Updating Your Notes
Whenever you make changes locally:

1. `git add .`
2. `git commit -m "Updated notes"`
3. `git push`

The site will update automatically.
