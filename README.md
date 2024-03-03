# instant-chat-app-backend
Instant Chat application has straightforward chat functionality using Node.js, Express, and Socket.IO. The app allows users to connect to a server, join a chat room, and engage in real-time conversations. It utilizes WebSocket communication for instant messaging.

# App Live:
Backend-Live-On: https://instant-chat-app.onrender.com/

# Features:
Real-Time Chat: Connect and chat instantly with other users.
Join/Leave Notifications: Get notifications when someone joins or leaves the chat.
Room-based Messaging: Send messages to everyone or within a specific room.
Welcome Messages: Receive a warm welcome upon joining the chat.

# Technologies Used:
Node.js: Server-side JavaScript runtime.
Express: Web application framework simplifying server setup.
Socket.IO: Library for real-time, event-based communication.
Cors: Middleware for Cross-Origin Resource Sharing.

# How to Run:
Install dependencies: npm install
Start the server: npm start or npm run dev for development with nodemon.

# Server Configuration:
The server runs on port 3500 (modifiable in index.js).
CORS allows communication from specified origins.

# Usage:
Enter your name and join the chat.
Send messages to the general chat or specify a room ID for a specific room.

# Code Structure:
index.js: Main server file with Express, Socket.IO setup, and chat functionality.
package.json: Configuration with dependencies and scripts.

# Dependencies:
cors: Enables Cross-Origin Resource Sharing.
express: Web framework for Node.js.
nodemon: Restarts the server on changes.
socket.io: Real-time communication library.

# License:
ISC License.

Author: shrey
