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

## Current Task: Change Sitemap to Dropdown Menu

### Plan
1.  **Update `blueprint.md`:** Done.
2.  **Modify `index.html`:**
    *   Change the "사이트맵" link in the navigation to incorporate a dropdown structure.
    *   Add the ranking categories within this dropdown.
3.  **Modify `style.css`:**
    *   Add CSS to style the dropdown menu.
    *   Implement hover functionality to display the dropdown.
4.  **Remove `sitemap.html`:** The separate sitemap page is no longer needed.
