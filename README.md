Book Store MERN Stack Application
A full-stack e-commerce application for managing and selling books, built with the MERN (MongoDB, Express.js, React, Node.js) stack. This project includes user authentication, a shopping cart, and a dedicated admin dashboard for managing products and orders.

🌟 Key Features
User Authentication: Secure user registration and login.

Role-Based Access Control (RBAC): Differentiates between regular users and administrators.

Shopping Cart: A dynamic cart for adding, removing, and clearing books.

Checkout & Order Management: A streamlined checkout process and a dedicated page to view placed orders.

Admin Dashboard: A protected area for administrators to add, update, and delete books.

RTK Query: Efficient data fetching and caching with Redux Toolkit Query for a responsive user experience.

🚀 Technologies Used
Frontend (React)

React Router DOM: For client-side routing.

Redux Toolkit: For state management (shopping cart, API data).

RTK Query: For powerful API data fetching and caching.

SweetAlert2: For user-friendly pop-up notifications.

Backend (Node.js & Express.js)

Express.js: The web framework for building the API.

Mongoose: An Object Data Modeling (ODM) library for MongoDB.

JSON Web Tokens (JWT): For secure authentication and authorization.

bcrypt.js: For securely hashing and storing user passwords.

dotenv: To manage environment variables.

Database

MongoDB: A NoSQL database for storing application data.

⚙️ Installation and Setup
Follow these steps to get a local copy of the project up and running.

1. Clone the repository

Bash

git clone <repository_url>
cd <repository_name>
2. Install dependencies for the backend

Navigate to the backend folder and install the dependencies.

Bash

cd backend
npm install
3. Configure environment variables

Create a .env file in the backend directory with your database connection string and JWT secret.

PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET_KEY=<a_long_secret_string>
4. Run the backend server

Bash

npm start
5. Install dependencies for the frontend

Open a new terminal, navigate to the frontend folder, and install the dependencies.

Bash

cd ../frontend
npm install
6. Run the frontend application

Bash

npm run dev
The application should now be running on http://localhost:5173.

🔒 Authentication & Authorization
This application uses a JWT-based authentication system with a role-based access control. The frontend uses custom components (PrivateRoute and AdminRoute) to protect routes, while the backend uses middleware to secure API endpoints based on the token's validity and the user's role.
