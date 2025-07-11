# Library Management API

This is a RESTful API for managing books and borrow operations in a library. It is built using **Express.js**, **TypeScript**, and **MongoDB (Mongoose)** and deployed on **Vercel**.

---

## Features

- ✅ Add, view, update, and delete books
- ✅ Borrow books with copy availability check
- ✅ View a summary of borrowed books
- ✅ Schema validation using Mongoose
- ✅ Static methods and middleware for business logic
- ✅ Centralized error handling
- ✅ Environment configuration using `.env`
- ✅ Clean and modular folder structure

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **CORS** for cross-origin access
- **Vercel** for deployment
- **Postman** for testing

---

##  Project Setup

### ✅ Prerequisites

- Node.js installed
- Mongoose installed
- MongoDB Atlas account or local MongoDB
- Vercel account (for deployment)

---

###  Installation

1. **Clone the repository**
```
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
```
2. **Install dependencies(express,mongoose,cors,env,typescript)**
```
npm install
npm install express mongoose cors dotenv
tsc --init
```
3. **Create a .env file in the root:**
```
PORT=5000
MONGODB_URI=mongodb+srv://nafi:admin@cluster.mongodb.net/library-management
```
4. **Run the server locally**
```
npm run dev
```
## Deployment on Vercel
**🔗 Base URL**
```
https://library-management-api-jet.vercel.app/

```
 # API Endpoints
 | #   | Method     | Endpoint     | Full Vercel URL                                                                                        | Description                      | Sample Body (if applicable)                                                                                                                                                       |
| --- | ---------- | ------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣ | **POST**   | `/books`     | [POST /books](https://library-management-api-jet.vercel.app/api/books)                                 | Create a new book                | `json { "title": "Atomic Habits", "author": "James Clear", "genre": "NON_FICTION", "isbn": "9780735211292", "description": "Build good habits, break bad ones.", "copies": 10 } ` |
| 2️⃣ | **GET**    | `/books`     | [GET /books](https://library-management-api-jet.vercel.app/api/books)                                  | Get all books                    | —                                                                                                                                                                                 |
| 3️⃣ | **GET**    | `/books/:id` | Replace `:id` in [GET /books/\:id](https://library-management-api-jet.vercel.app/api/books/BOOK_ID)    | Get a specific book by ID        | —                                                                                                                                                                                 |
| 4️⃣ | **PATCH**  | `/books/:id` | Replace `:id` in [PATCH /books/\:id](https://library-management-api-jet.vercel.app/api/books/BOOK_ID)  | Update specific fields of a book | `json { "copies": 5 } `                                                                                                                                                           |
| 5️⃣ | **DELETE** | `/books/:id` | Replace `:id` in [DELETE /books/\:id](https://library-management-api-jet.vercel.app/api/books/BOOK_ID) | Delete a book by ID              | —                                                                                                                                                                                 |
| 6️⃣ | **POST**   | `/borrow`    | [POST /borrow](https://library-management-api-jet.vercel.app/api/borrow)                               | Borrow books                     | `json { "book": "BOOK_ID", "quantity": 2, "dueDate": "2025-07-18T00:00:00.000Z" } `                                                                                               |
| 7️⃣ | **GET**    | `/borrow`    | [GET /borrow](https://library-management-api-jet.vercel.app/api/borrow)                                | Get summary of borrowed books    | —                                                                                                                                                                                 |

# Testing API Endpoints with Postman
**Open Postman app and check api's mentioned below:**
1. **Add a Book (POST)**
```
https://library-management-api-jet.vercel.app/api/books
```
Method:
POST

Body:
```
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "NON_FICTION",
  "isbn": "9780735211292",
  "description": "Build good habits, break bad ones.",
  "copies": 10
}

```
2. **Get all books (GET):**
```
https://library-management-api-jet.vercel.app/api/books
```
3. **Get a single book by ID (GET):**
```
https://library-management-api-jet.vercel.app/api/books/<bookId>

```
4. ** Update a book by ID (PUT):**
```
https://library-management-api-jet.vercel.app/api/books/<bookId>

```
BODY(method PUT):
```
{
  "copies": 50
}
```
5. **Delete a book by ID (DELETE):**
```
https://library-management-api-jet.vercel.app/api/books/<bookId>

```
## Borrow Endpoints
6. **Borrow a book (POST):**
```
https://library-management-api-jet.vercel.app/api/borrow

```
Method(POST):
```
{
  "book": "68565a8d01ce35707813a6e7",
  "quantity": 1,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```
7. **Get borrow summary (GET):**
```
https://library-management-api-jet.vercel.app/api/borrow
```
Thats all thank you.





