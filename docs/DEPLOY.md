# How to Deploy eJPTv2 Study Guide to GitHub Pages

Congratulations! You have a fully functional, multi-language study guide. Sharing it with the world is easy.

## Option 1: Quick Deployment (Manual)

1.  **Log in to GitHub** and create a new repository (e.g., `ejptv2-notes`).
2.  **Upload Files**:
    - Upload the **contents** of the `docs` folder to the root of your repository.
    - Ensure `index.html`, `style.css`, `script.js`, and `content.js` are at the top level.
3.  **Enable GitHub Pages**:
    - Go to **Settings** > **Pages**.
    - Under **Source**, select `Deploy from a branch`.
    - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
    - Click **Save**.
4.  **Wait**: In a few minutes, your site will be live at `https://your-username.github.io/ejptv2-notes/`.

## Option 2: Command Line (Git)

If you have Git installed, run these commands in your `docs` folder:

```bash
# Initialize git
git init

# Add remote (replace URL with your repo)
git remote add origin https://github.com/your-username/ejptv2-notes.git

# Add files
git add .

# Commit
git commit -m "Initial deploy of eJPTv2 Guide"

# Push
git push -u origin main
```

Then follow the **Enable GitHub Pages** step above.

## Troubleshooting

-   **"404 Not Found"**: Make sure `index.html` is in the root folders you selected in settings.
-   **Content not loading**: Check the console (F12) for errors. If you see CORS errors, remember this app is designed to run from a server (like GitHub Pages), not directly from file (`file://`).

Enjoy your new study guide! 🚀
