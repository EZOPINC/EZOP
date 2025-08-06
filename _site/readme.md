
# Website with Blog, AI Chat & WhatsApp Connect (Built with Jekyll)

[![Built with Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-blue?logo=jekyll&logoColor=white)](https://jekyllrb.com)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-brightgreen?logo=github)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This is a modern, responsive, and open-source **community website** built with Jekyll and hosted via GitHub Pages. It supports blogging, event promotion, AI chatbot integration, and WhatsApp contact—all powered by lightweight static files.

---

## Project Structure

```text
.
├── _includes/             # Shared components (navbar, footer, share buttons)
├── _layouts/              # Page templates (default, blog, post)
├── _posts/                # Markdown blog content with front matter
├── _sass/                 # SCSS partials for styling
├── assets/
│   ├── css/               # Custom stylesheets
│   ├── js/                # Optional scripts
│   └── images/            # Static images
├── blog.html              # Blog index with pagination + tags
├── contact.html           # Contact page with embedded Google Form + WhatsApp
├── gallery.html           # Photo archive (year-wise)
├── index.md               # Home page
├── about.md               # About the community
├── _config.yml            # Jekyll configuration
├── Gemfile                # Ruby dependencies
└── README.md              # Project overview
---
```
## Key Features

- ✅ **Responsive Bootstrap 5 Design**
- ✅ **Markdown-Powered Blogging System**
- ✅ **SEO-Friendly Meta Tags on Every Blog**
- ✅ **Pagination & Tag Filtering**
- ✅ **Floating Social Share Buttons** (WhatsApp, X, Reddit, Email, Print)
- ✅ **AI Chatbot Integration (ChatGPT API-ready)**
- ✅ **Animated WhatsApp "Chat With Us" Button**
- ✅ **Comment System Support** (e.g., Disqus or Giscus)
- ✅ **Contact Page via Embedded Google Form**
- ✅ **Jekyll-Powered Gallery with Lazy Loading**
- ✅ **Clean URL Routing via Permalinks**
- ✅ **GitHub Pages-Ready**

---

##  Writing a Blog Post

1. Create a new file inside `_posts/`:

_posts/2025-08-01-my-first-post.md


2. Add YAML front matter (Example code for the blog):
```yaml
---
layout: post
title: "The Future of IT Consulting"
description: "Exploring trends in cloud, AI, and digital strategy."
tags: [it-consulting, future, trends]
image: /assets/images/blog/it-future.jpg
---
```
3. Use Markdown to write your article. Upload images to assets/images/blog/.

## Blog System with SEO + Tags + Pagination
Pagination is handled via Liquid logic or jekyll-paginate.

Tags are extracted from front matter and linked to filtered views.

## Each blog post automatically includes:

SEO meta tags (title, description, image)
OpenGraph / Twitter Card metadata
Floating social share buttons
Comment section (optional)
PDF Print Support


##  AI Chatbot & WhatsApp
Floating WhatsApp Button on homepage with pulse animation and tooltip.

### AI Chatbot Integration (e.g., ChatGPT) through OpenAI’s API or third-party embed:
Add embed in index.html or a separate chat.html
Ensure API keys are secured via proxy/serverless function

## Contact Page Logic
Uses Google Form embedded via iframe
Auto-submits and stores form data in Google Sheets (if configured)
Includes optional email, comment fields, and hidden IDs

## Local Setup Instructions
Requires Ruby and Bundler

# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Open in browser
http://localhost:4000


## GitHub Pages Deployment
This repo is compatible with GitHub Pages. Just push to the main branch or configure your gh-pages branch. No build tools required.

********** Future Enhancements *********************
Frontend CMS Editor via Decap CMS or NetlifyCMS
RSS Feed + Newsletter Integration
Search Functionality (e.g., Lunr.js)
Sitemap and Analytics Integration

## Contributing

We welcome contributions from the community!
Fork this repo
Create a new branch
Submit a pull request
Issues and suggestions can be opened in the GitHub Issues tab.

## License
This project is released under the MIT License. You're free to use, modify, and distribute it with attribution.


## Credits
Built with Jekyll
UI Powered by Bootstrap 5
Icons from FontAwesome

