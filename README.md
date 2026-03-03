# 🛒 ShoppyGlobe REST API

A complete E-commerce Backend REST API built using Node.js, Express.js, MongoDB, and JWT Authentication.

This project implements product management, user authentication, and cart functionality following REST principles.

---

## 🚀 Project Information

- 👤 Author: Rahul
- 🔗 GitHub: https://github.com/Rahul-Cloud1/shoppyglobe-api
- 🖥 Server URL: http://localhost:5000

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- Protected Routes using Middleware

### 📦 Product Management
- Get All Products
- Get Product by ID

### 🛒 Cart Management (Protected)
- Add Product to Cart
- Update Cart Item Quantity
- Remove Item from Cart

### 🗄 Database
- MongoDB (Local)
- Mongoose ODM
- Proper Schema Design

### 🧪 API Testing
- Tested using ThunderClient
- Proper HTTP Status Codes
- Error Handling Middleware

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- nodemon

---

## 📁 Project Structure

```
shoppyglobe-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── cartController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Rahul-Cloud1/shoppyglobe-api.git
cd shoppyglobe-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root folder:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=supersecretkey
```

⚠ Do NOT commit the `.env` file.

### 4️⃣ Run the Server

```bash
npm run dev
```

If successful, you will see:

```
MongoDB Connected: 127.0.0.1
Server running on port 5000
```

---

## 📬 API Endpoints

---

### 🔐 Authentication Routes

#### ➤ Register User

POST `/register`

Request Body:
```json
{
  "name": "Rahul",
  "email": "rahul@test.com",
  "password": "123456"
}
```

---

#### ➤ Login User

POST `/login`

Request Body:
```json
{
  "email": "rahul@test.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "JWT_TOKEN_HERE"
}
```

---

### 📦 Product Routes

#### ➤ Get All Products

GET `/products`

---

#### ➤ Get Product by ID

GET `/products/:id`

Example:
```
GET /products/65f3e21abc1234567890
```

---

### 🛒 Cart Routes (Protected)

Requires JWT Token in header:

```
Authorization: Bearer <your_token>
```

---

#### ➤ Add to Cart

POST `/cart`

```json
{
  "productId": "PRODUCT_ID",
  "quantity": 2
}
```

---

#### ➤ Update Cart Item

PUT `/cart/:id`

```json
{
  "quantity": 5
}
```

---

#### ➤ Delete Cart Item

DELETE `/cart/:id`

---

## 🗄 Database Collections

- Users
- Products
- Cart

---

## 🛡 Error Handling

- 400 → Bad Request
- 401 → Unauthorized
- 404 → Not Found
- 500 → Server Error

Global error handling middleware implemented.

---

## 🧪 Testing

Tested using:
- ThunderClient
- MongoDB Compass


## 👨‍💻 Author

Rahul  
GitHub: https://github.com/Rahul-Cloud1

