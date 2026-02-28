# LinkRoom Blueprint

## Overview

LinkRoom is a website that provides ranking information for various content-specific websites. It features a clean, user-friendly interface with a top navigation bar, ad banners, and a comprehensive ranking list. It is now optimized for mobile devices, ensuring a responsive and user-friendly experience across all screen sizes.

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
- **Free Board Page (Frontend Only):** A page to simulate a free bulletin board.

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

## Current Task: Mobile Optimization

### Plan
1.  **Update `blueprint.md`:** Done. Document mobile optimization task and specific areas to be addressed.
2.  **Modify `style.css`:**
    *   Review and enhance existing media queries.
    *   Add specific media queries for tables (notice, free board) to prevent overflow and improve readability on small screens.
    *   Adjust layout, font sizes, padding, and margins for all elements to ensure optimal display on mobile devices.
    *   Ensure form elements stack vertically on small screens.
    *   Verify navigation (especially dropdown) usability on mobile.

### Limitations (Free Board - Frontend Only)
-   **No persistent storage:** Posts are stored in `localStorage` and will be lost if browser data is cleared or on a different device/browser.
-   **No backend:** No server-side storage, processing, or robust authentication.
-   **Simulated authentication:** ID/password for edit/delete is client-side only and provides no real security.
-   **No actual file uploads:** "Photos, videos, links" will be handled as text inputs or placeholders, not actual file uploads.