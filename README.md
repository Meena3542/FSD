# FSD
# Real-Time Chat Application

## Overview

This is a real-time chat application with the following features:
- **Universal Chat Room**: A single chat room accessible to any authenticated user.
- **Authentication**: Login system to ensure only authenticated users can access the chat room.
- **Demo Credentials**: Provided for easy testing without the need to sign up.

## Technologies Used

- **Frontend**:
  - React
  - Axios
  - Socket.io-client
  - React Router DOM
  - Material-UI (for UI components)

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Socket.io

## Setup Instructions

### Prerequisites
- Node.js and npm installed (Download from [Node.js official website](https://nodejs.org/))
- MongoDB installed and running (Download from [MongoDB official website](https://www.mongodb.com/try/download/community))

### Backend Setup
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/chat-app.git
   cd chat-app/backend

### Additional Notes
1. **Ensure MongoDB is Running**: Make sure MongoDB is running on your system before starting the backend server.
2. **Adjust Database Configuration**: If MongoDB is not running on the default port or if you have a different setup, adjust the MongoDB connection string in `server.js`.

### Code Adjustments

#### Backend (server.js)

Ensure your `server.js` file contains the correct MongoDB connection string and handles the necessary routes and WebSocket events.

#### Frontend (React Components)

Make sure your React components are set up correctly to handle authentication, displaying chat messages, and allowing users to send messages.

By following these steps and using the provided `README.md` template, you should have a clear and organized setup process for your real-time chat application.

###Backend Setup
Clone the repository:

sh
Copy code
git clone https://github.com/your-repo/chat-app.git
cd chat-app/backend
Install dependencies:

sh
Copy code
npm install
Start the backend server:

sh
Copy code
node server.js
The backend server should be running on http://localhost:5000.

###Frontend Setup
Navigate to the frontend directory:

sh
Copy code
cd ../frontend
Install dependencies:

sh
Copy code
npm install
Start the frontend development server:

sh
Copy code
npm start
The frontend should be running on http://localhost:3000.
