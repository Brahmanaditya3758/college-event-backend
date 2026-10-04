# College Event Resource Management System - Backend

REST API for the College Event Resource Management System. It handles users, events, bookings, admin approvals and email notifications.

Frontend repo: https://github.com/Brahmanaditya3758/college-event-frontend

Features

Keep only what is already working. Delete the rest.

User registration and login with JWT authentication
Role-based access control (student and admin)
Create and manage events, student registrations
Lab / projector booking with admin approval
Email notifications (Nodemailer)
Reports for admins
Tech stack

Node.js, Express, MongoDB Atlas, JWT, Nodemailer

API endpoints

Fill this table with your real routes.

Method	Endpoint	What it does	Access
POST	/api/auth/register	Create a new user	Public
POST	/api/auth/login	Login and get a token	Public
GET	/api/events	List events	Logged in
POST	/api/events	Create an event	Admin
Project structure
.
|-- server.js
|-- routes/        # API routes
|-- controllers/   # request logic
|-- models/        # MongoDB schemas
|-- middleware/    # auth and role checks
`-- .env           # secrets (never commit this)

Change this to match your real folders.

How to run locally
Clone the repository
bash
   git clone https://github.com/Brahmanaditya3758/college-event-backend.git
   cd college-event-backend
Install packages
bash
   npm install
Create a .env file
   PORT=5000
   MONGO_URI=<your MongoDB Atlas connection string>
   JWT_SECRET=<a long random secret>
   EMAIL_USER=<email for notifications>
   EMAIL_PASS=<app password>
Start the server
bash
   npm start
The API runs on http://localhost:5000

Never upload your real .env file to GitHub. Add .env to .gitignore.

Status

In progress. Next: Docker, CI/CD pipeline, and AWS deployment.

Author

Aditya Sharma - LinkedIn | GitHub
