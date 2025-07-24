# Mentorship Pairing Platform backend

## Overview

This application is a **Mentorship Pairing Platform** designed to connect mentors and mentees. It allows users to register, create profiles, send and receive mentorship requests, and (soon) book sessions and provide feedback. The backend is built with TypeScript, Express, and Drizzle ORM for PostgreSQL.

---

## Features

### 1. **User Registration & Authentication**
- Users can sign up as mentors, mentees, or admins.
- Secure authentication using JWT tokens.
- Passwords are hashed for security.

### 2. **Profile Management**
- Users create and update detailed profiles.
- Profiles include bio, skills, goals, and role (mentor/mentee/admin).

### 3. **Role-Based Access**
- The platform supports three roles:
  - **Mentor:** Can receive requests and set availability.
  - **Mentee:** Can send requests and book sessions.
  - **Admin:** Can manage users and oversee platform activity.

### 4. **Mentorship Requests**
- Mentees can send mentorship requests to mentors.
- Mentors can view incoming requests and accept or decline them.
- Request status is tracked (`pending`, `accepted`, `declined`).

### 5. **Request Management**
- Both mentors and mentees can view the status of their requests.
- Unique indexes prevent duplicate requests between the same mentor and mentee.

### 6. **Upcoming Features**
#### **Session Booking**
- Mentees will be able to book sessions with mentors based on mentor availability.
- Mentors set weekly availability blocks (e.g., Mondays 3–5pm).
- The system will prevent double-booking and manage session schedules.

#### **Feedback System**
- After a session, mentees can provide feedback and ratings for mentors.
- Feedback will be stored and visible in mentor profiles.

---

## Technical Details

- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL (via Drizzle ORM)
- **Authentication:** JWT, bcrypt
- **Validation:** Zod
- **Other:** dotenv, cookie-parser, cors

### **Database Schema Highlights**
- **Users Table:** Stores user info and roles.
- **Profile Table:** Stores user profiles linked to users.
- **Requests Table:** Tracks mentorship requests and their status.
- **Mentor-Mentee Join Table:** Manages many-to-many relationships.
- **Session Table:** (Upcoming) Will store booked sessions and feedback.

---

## How It Works

1. **Sign Up:** Users register as mentors, mentees, or admins.
2. **Profile Creation:** Users fill out their profile with relevant info.
3. **Send Requests:** Mentees browse mentors and send mentorship requests.
4. **Receive Requests:** Mentors view and respond to incoming requests.
5. **Book Sessions:** (Coming soon) Mentees book sessions with mentors.
6. **Feedback:** (Coming soon) Mentees provide feedback after sessions.

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mentorship-pairing-platform.git
   cd mentorship-pairing-platform/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` and fill in your database URL and JWT secret.

4. **Run migrations**
   ```bash
   npm run db:push
   ```

5. **Start the server**
   ```bash
   npm run dev
   ```

---

## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

## License

This project

## Test Cases For Sending Of Requests
- check if mentee can send requests 
- check if mentor can accept requets
- mentee must not be able to send requets to themslef
- mentor must not be able to send requests to themselfs