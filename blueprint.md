# LinkRoom Blueprint

## Overview

LinkRoom is a website that provides ranking information for various content-specific websites. It features a clean, user-friendly interface with a top navigation bar, ad banners, and a comprehensive ranking list.

## Design and Features

### Layout
- **Top Navigation Bar:**
  - Left: Site title "LinkRoom" (serves as a home button).
  - Right:
    - **Sitemap Dropdown:** On hover, displays a list of ranking categories.
    - "Notice", "Free Board", "Telegram Inquiry", "Login".
- **Banner Ads:** Three banner ad slots are placed below the navigation bar.
- **Site Rankings:** A section below the ads displays the rankings.
- **Notice Page:** A page to display a list of notices and a form to create new ones.

### Site Rankings
The following categories are included, each with rankings from 1 to 7:
- Adult
- Webtoon
- Replay/Streaming
- Torrent
- Entertainment/OP
- Eat-and-run verification
- Sports broadcasting
- Adult goods

## Current Task: Create Notice Page

### Plan
1.  **Update `blueprint.md`:** Done.
2.  **Create `notice.html`:** Create a new HTML file for the notice page, including a list and a form.
3.  **Modify `index.html`:** Link the "Notice" in the navigation bar to `notice.html`.
4.  **Modify `style.css`:** Add styles for the notice page.