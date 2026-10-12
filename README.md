# 🎓 CampusHub — Student & Faculty Portal

CampusHub is an enterprise-grade, web-based campus communication and academic dashboard system. It unifies student notices, event registrations, course tracking, and administrative announcements into a single, cohesive user experience. Built using **Laravel**, **Inertia.js**, **React**, and **Tailwind CSS**, CampusHub provides a single-page application (SPA) feel with the server-side routing security of Laravel.

---

## 📋 Table of Contents
- [Key Architectural Highlights](#-key-architectural-highlights)
- [System Features](#-system-features)
- [User Role & Permissions Matrix](#-user-role--permissions-matrix)
- [Database Schema & Data Models](#-database-schema--data-models)
- [Project Directory Structure](#-project-directory-structure)
- [Installation & Environment Setup](#-installation--environment-setup)
- [Production Deployment Checklist](#-production-deployment-checklist)
- [Troubleshooting & Common Issues](#-troubleshooting--common-issues)

---

## 🏗️ Key Architectural Highlights

- **Monolithic Single-Page Application (SPA):** Leverages Inertia.js to eliminate complex client-side state managers and API routing layers while preserving React frontend interactivity.
- **Responsive Indigo & Teal UI:** Crafted with Tailwind CSS, featuring subtle micro-interactions, dark mode compatibility, frosted-glass card effects, and clean grid layouts.
- **Session-Based Authentication:** Secured by Laravel Breeze, offering built-in CSRF protection, hashed password verification, and session state persistence.

---

## ✨ System Features

### 1. Centralized Announcement Bulletin
- Filter announcements by categories (`Academic`, `Sports`, `Administrative`, `Events`).
- Live search query filtering across titles, authors, and body text.
- Modal view for full notice readings and urgent flag indicators.
- Admin & Faculty submission modal for publishing new campus notices dynamically.

### 2. Activity & Event RSVP Hub
- Interactive event cards displaying date, location, time, and participant capacity metrics.
- One-click RSVP toggle with persistent tracking and capacity count updates.
- Location markers and event type category tags.

### 3. Student & Faculty Dashboard
- **Welcome Briefing Banner:** Context-aware hero banner displaying logged-in user details and live date indicators.
- **Metric Cards:** At-a-glance trackers for unread notices, active RSVPs, total active enrolled courses, and system operational status.
- **Task & Deadline Tracker:** Priority-tagged sidebar displaying upcoming academic submissions and exams.

---

## 👥 User Role & Permissions Matrix

| Feature / Action | Student | Faculty | Administrator |
| :--- | :---: | :---: | :---: |
| View Public & Student Announcements | ✅ | ✅ | ✅ |
| RSVP to Campus Events | ✅ | ✅ | ✅ |
| View Personal Academic Deadlines | ✅ | ❌ | ❌ |
| Post New Campus Notices | ❌ | ✅ | ✅ |
| Edit & Delete Announcements | ❌ | ❌ | ✅ |
| System Operational Overrides | ❌ | ❌ | ✅ |

---

## 🗄️ Database Schema & Data Models

### `users`
- `id` (Primary Key)
- `name` (string)
- `email` (string, unique)
- `role` (enum: `student`, `faculty`, `admin`)
- `password` (hashed string)
- `timestamps`

### `announcements`
- `id` (Primary Key)
- `user_id` (Foreign Key referencing `users.id`)
- `title` (string)
- `category` (string: `Academic`, `Events`, `Administrative`, `Sports`)
- `content` (text)
- `urgent` (boolean)
- `timestamps`

### `events`
- `id` (Primary Key)
- `title` (string)
- `date` (string/date)
- `time` (string)
- `location` (string)
- `capacity` (integer)
- `timestamps`

### `event_user` (Pivot Table for RSVPs)
- `id` (Primary Key)
- `user_id` (Foreign Key referencing `users.id`)
- `event_id` (Foreign Key referencing `events.id`)
- `timestamps`

---

## 📂 Project Directory Structure

```text
campushub/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AnnouncementController.php
│   │   │   ├── DashboardController.php
│   │   │   └── EventController.php
│   │   └── Middleware/
│   └── Models/
│       ├── Announcement.php
│       ├── Event.php
│       └── User.php
├── config/
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── css/
│   │   └── app.css
│   └── js/
│       ├── Components/        # Reusable Modals, Badges, Dropdowns
│       ├── Layouts/           # AuthenticatedLayout.jsx & GuestLayout.jsx
│       ├── Pages/
│       │   ├── Auth/          # Login, Register, Password Reset
│       │   ├── Dashboard.jsx  # Main Student & Faculty Dashboard
│       │   └── Welcome.jsx    # Public Landing Page & Notice Board
│       └── app.jsx
├── routes/
│   ├── auth.php
│   └── web.php
├── public/
├── tailwind.config.js
├── vite.config.js
└── package.json