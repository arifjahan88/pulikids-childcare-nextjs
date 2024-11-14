# Real-Time Document Upload Application

This is a **Real-Time Document Upload Application** built with Next.js, Clerk, and Mongoose. The application enables users to manage their documents through a seamless experience featuring real-time CRUD operations, notifications, and responsive design.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Setup Instructions](#setup-instructions)
5. [Dependencies](#dependencies)
6. [Deployment](#deployment)

---

## Project Overview

The **Real-Time Document Upload Application** provides a platform for authenticated users to upload, view, update, and delete documents in various formats (PDF, text, doc, CSV). The application focuses on a clean, responsive UI/UX, real-time notifications for document actions, and robust error handling.

## Tech Stack

- **Frontend:** Next.js
- **Authentication:** Clerk (User registration, login, profile management)
- **Database:** MongoDB using Mongoose ORM
- **File Handling:** Custom document upload for local files (PDF, text, doc, CSV)
- **CSS Framework:** Tailwind CSS with Ant Design Framework

## Features

### Core Functionality

- **Authentication:**
  - User registration and login with Clerk
  - Profile management and session handling
- **Document Management:**
  - Upload documents (PDF, text, doc, CSV)
  - View, update, and delete documents
  - Real-time notifications on document actions

### UI/UX

- **Responsive Design:** Ensures compatibility across devices
- **Loading & Error Handling:** Loading indicators, error alerts, and validation
- **Input Validation:** Ensures accurate user input and feedback

## Setup Instructions

```bash
git clone https://github.com/arifjahan88/pulikids-childcare-nextjs
cd pulikids-childcare-nextjs
npm install
cp .env.example .env.local //Provide All the keys
npm run dev
```

## Dependencies

- Next.js - React framework with server-side rendering capabilities
- Clerk - Authentication provider for user management
- Mongoose - ORM for MongoDB integration
- Tailwind CSS and Ant Design - Responsive and reusable styling
- Redux Toolkit - For Store and api implementation

## Deployment

- Deployed Application URL: [https://pulikids-childcare-nextjs.vercel.app/](https://pulikids-childcare-nextjs.vercel.app/)
- Test Account Credentials:
  - Username: arif.varsity@gmail.com
  - Password: pulkittest
