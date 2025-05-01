
# YouTube User CRUD API

A simple and clean REST API built using **Node.js**, **Express**, and **MongoDB** following the **MVC architecture**. It performs full CRUD operations (Create, Read, Update, Delete) on a user resource.

## 📁 Project Structure (MVC)

```
youtube-user-crud-api/
├── config/          # MongoDB connection
│   └── db.js
├── controllers/     # Business logic for routes
│   └── userController.js
├── models/          # Mongoose schema
│   └── User.js
├── routes/          # API route definitions
│   └── userRoutes.js
├── app.js           # Express app configuration
└── server.js        # Entry point
```

## 🚀 Features

- RESTful API with Express
- MongoDB integration using Mongoose
- Full CRUD on user data
- MVC pattern for clean structure
- Route-based error handling
- Proper status codes and JSON responses

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemon (for development)

## 📂 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/youtube-user-crud-api.git
   cd youtube-user-crud-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB locally** (or use MongoDB Atlas)

4. **Run the server**
   ```bash
   npm run dev
   ```

5. **Access API**
   ```
   http://localhost:9001/api/users
   ```

## 🧪 API Endpoints

| Method | Route                | Description          |
|--------|----------------------|----------------------|
| GET    | `/api/users/`        | Get all users        |
| GET    | `/api/users/:id`     | Get user by ID       |
| POST   | `/api/users/`        | Create a new user    |
| PATCH  | `/api/users/:id`     | Update user          |
| DELETE | `/api/users/:id`     | Delete user          |

## ✍️ Sample POST Body
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "gender": "male",
  "jobTitle": "Developer"
}
```

## 📌 Notes

- MongoDB must be running locally (`mongodb://127.0.0.1:27017/youtube-app-1`) or update `config/db.js` with your Atlas URI.
- Default server runs on **port 9001**

## 📜 License

This project is open-source and free to use.
