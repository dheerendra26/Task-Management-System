# 📋 Flow-Bit: Task Management System

![Task Management System](./frontend/public/Hero-Page.png)

A responsive full-stack task management application for organizing tasks, managing priorities and due dates, collaborating with team members through **real-time comments**, tracking subtasks, and customizing the user experience.

## 🚀 Live Demo

[View Live Demo](https://flow-bit-io.vercel.app)

## ✨ Features

### 🔐 Authentication

- Google OAuth authentication
- Guest login
- Persistent guest tasks using Local Storage
- User profile management
- Logout functionality

### ✅ Task Management

- Create, update, and delete tasks
- Edit task titles and descriptions
- Manage due dates, priorities, and statuses
- Task statuses:
  - To Do
  - Doing
  - On Hold
  - Completed

- Multiple task colors
- Search tasks by name
- Multi-criteria task filtering
- Grid and list views
- Dedicated task details page

### 👥 Team Collaboration

- Add **multiple members to a task**
- Manage task members
- All members associated with a task can participate in discussions
- **Real-time comments** using WebSockets
- Comments appear instantly for other users viewing the same task
- Reply to other users' comments
- View task discussions and replies in real time

### 🏷️ Labels

- Add multiple labels to a task
- Manage task labels
- Display labels within task information

### 🔽 Subtasks

- Create, update, and delete subtasks
- Change subtask priority and status
- Set subtask due dates
- Manage subtasks directly from the task details page

### 🎨 User Experience

- Responsive design for desktop, tablet, and mobile
- Light and dark themes
- Multiple color modes
- Persistent theme and color preferences
- Reusable UI components
- Interactive task management interface

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** NestJS, TypeScript
- **Database:** PostgreSQL
- **Authentication:** Google OAuth
- **Real-Time Communication:** WebSockets / Socket.IO
- **Deployment:** Vercel (Frontend), Render (Backend & PostgreSQL)

## 🏗️ Architecture

The application follows a full-stack architecture:

- **Next.js** — Responsive frontend and user interface
- **NestJS** — REST APIs and backend business logic
- **PostgreSQL** — Persistent relational data storage
- **Socket.IO** — Real-time communication for task collaboration and comments
- **Google OAuth** — User authentication
- **Local Storage** — Guest task and UI preference persistence
- **Vercel** — Frontend deployment
- **Render** — Backend and PostgreSQL deployment

## 🌟 Highlights

- Full-stack TypeScript application
- RESTful API architecture
- Google OAuth and guest authentication
- PostgreSQL relational database
- Multi-member task collaboration
- Real-time task comments and replies
- Task-label relationships
- Nested task management through subtasks
- Responsive and reusable component architecture
- Multiple task views and filtering options
- Persistent user interface preferences
- Dedicated task details management interface

## API Proxy Configuration

The frontend routes REST API requests through the Next.js rewrite `/api/*`. Configure these environment variables:

### Frontend (Vercel)

- `BACKEND_URL`: the NestJS origin, for example `https://your-service.onrender.com`. Do not prefix this variable with `NEXT_PUBLIC_`.
- `NEXT_PUBLIC_API_URL`: currently used only by the Socket.IO client, for example `https://your-service.onrender.com`.

For local development, copy `frontend/.env.example` to `frontend/.env.local` and set the values for your local NestJS server.

### Backend (Render)

Set `GOOGLE_CALLBACK_URL` to the frontend proxy URL, for example `https://your-frontend.vercel.app/api/auth/google/callback`. Register that exact URL as an authorized redirect URI in Google Cloud Console. Set `FRONTEND_URL` to the frontend origin.

### WebSocket limitation

REST API calls and the initial Google OAuth endpoint use the Next.js rewrite. Socket.IO still connects directly to the NestJS origin because a standard Next.js rewrite on Vercel is not a dependable WebSocket reverse proxy. Therefore the backend origin may still be visible in the browser's WebSocket connection until Socket.IO is moved behind a WebSocket-capable reverse proxy or gateway.
