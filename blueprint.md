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

## Current Task: Create Free Board Page (Frontend Only)

### Plan
1.  **Update `blueprint.md`:** Done. Detail scope and limitations of free board implementation (client-side, `localStorage` based).
2.  **Create `freeboard.html`:**
    *   Header (same as `index.html`).
    *   Section for displaying a list of posts (title, author, date, views, basic pagination).
    *   Section for a post detail view (initially hidden, or shown with placeholder).
    *   Form for creating a new post (title, content, password, simulated attachment inputs for text/links).
    *   UI for edit/delete actions (in detail view).
3.  **Modify `index.html`:** Link "자유게시판" to `freeboard.html`.
4.  **Modify `style.css`:** Add styles for the free board list, detail, and form.
5.  **Modify `main.js`:** Implement logic to manage posts using `localStorage`, including display, creation, editing, and deletion (all client-side) and simulate ID/password check for edit/delete.

### Limitations
-   **No persistent storage:** Posts are stored in `localStorage` and will be lost if browser data is cleared or on a different device/browser.
-   **No backend:** No server-side storage, processing, or robust authentication.
-   **Simulated authentication:** ID/password for edit/delete is client-side only and provides no real security.
-   **No actual file uploads:** "Photos, videos, links" will be handled as text inputs or placeholders, not actual file uploads.
