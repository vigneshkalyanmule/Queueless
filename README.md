# QueueLess

QueueLess is a frontend-only smart queue management product for hospitals, clinics, campuses, banks, government offices, and service centers. It helps visitors discover services, join queues remotely, monitor estimated wait time, receive updates, and keep a digital visit history.

## Problem and solution

Physical queues make wait times unpredictable and force people to spend productive time in crowded waiting areas. QueueLess provides a digital token and a virtual waiting room while giving operators a focused queue control workspace.

## Features

- Responsive customer landing page, service directory, locations, and join flow
- Walk-in and appointment-ready queue joining with priority categories
- LocalStorage-backed digital tokens and live queue simulation
- Virtual waiting room with people-ahead and wait-time estimates
- Notifications, settings, visit history, and printable receipts
- Admin dashboard, queue controls, counter management, service configuration, and analytics
- Optional Web Speech API voice modal with graceful unsupported-browser fallback
- Light/dark themes, large text, high contrast, reduced motion, and keyboard focus states

## Tech stack

React, JavaScript, Vite, React Router, Lucide React, CSS custom properties, LocalStorage, and browser Web Speech APIs. The dependency list is intentionally small and has no backend or external map dependency.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Production checks are available with `npm run lint` and `npm run build`.

## Demo flow

1. Open the overview and select **Explore services**.
2. Filter services or open **Locations**.
3. Join a queue, choose a service, priority, and number of people.
4. Open **My queue** to watch the simulated queue progress.
5. Review notifications, history, and the printable receipt.
6. Open **Admin demo** to complete, skip, cancel, or pause queue operations.

## Architecture

`src/data.js` contains realistic mock services, locations, counters, notifications, and history. `src/QueueContext.jsx` owns shared demo state and persists it to LocalStorage. `src/pages.jsx` contains route-level customer and admin workflows. `src/components.jsx` contains reusable UI primitives. The visual system is centralized in `src/index.css` and `src/App.css`.

Voice is optional and never required. Browser recognition results are shown visually, and unsupported or denied recognition falls back to normal controls. A future implementation can connect parsed intents to the queue context without coupling speech logic to page layout.

## Future backend architecture

The current app deliberately uses frontend mock data. A production backend could use Node.js, Express, MongoDB, Socket.IO, and JWT authentication for real-time queues, multi-branch management, appointments, permissions, notifications, and audit logs. Frontend-only role navigation is demo UX, not a security boundary.

## Future improvements

- API adapters and authenticated customer/admin sessions
- Real-time Socket.IO queue events and server-side wait calculations
- QR code joining, multilingual translation data, and expanded voice intent parsing
- Automated accessibility and responsive visual regression tests
