# messendapp
messendapp/
├── backend/              
├── frontend/             # Frontend files
│   ├── src/
|───|── components/
│   |   ├── ChatList.js        # Displays list of conversations
│   |   ├── ChatWindow.js      # Displays messages and handles chat
│   |   ├── MessageInput.js    # Input box for sending messages
├───|── api.js                 # Axios instance for backend API
├───|── App.js                 # Main application
└───|── index.js               # Entry point for React
├── README.md


BACKEND/
├── server.js         # Main entry point
├── config/
│   └── db.js         # Database connection
├── routes/
│   └── users.js      # User-related routes
│   └── messages.js   # Messages-related routes
│   └── chats.js      # Chat-related routes
└── controllers/
    └── userController.js
    └── messageController.js
    └── chatController.js
