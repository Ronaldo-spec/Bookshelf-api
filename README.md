# Bookshelf API

A RESTful Bookshelf API built with **Node.js** and **Hapi.js**. This project demonstrates backend fundamentals such as routing, request validation, in-memory data handling, structured JSON responses, and API endpoint design.

This repository is positioned as a backend learning and portfolio project.

---

## Project Overview

Bookshelf API provides endpoints to manage book records. The API supports basic CRUD operations, including creating, reading, updating, and deleting books.

The server is built using Hapi and runs locally on port `9000`.

---

## Tech Stack

| Area | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Hapi.js |
| ID Generator | nanoid |
| Code Quality | ESLint, Airbnb Base |
| API Type | REST API |

---

## Main Features

- Add a new book
- Get all books
- Get book detail by ID
- Update book data by ID
- Delete book by ID
- CORS enabled for API testing
- Structured JSON response format

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/books` | Add a new book |
| `GET` | `/books` | Get all books |
| `GET` | `/books/{id}` | Get book detail by ID |
| `PUT` | `/books/{id}` | Update book data by ID |
| `DELETE` | `/books/{id}` | Delete book by ID |

---

## Installation

Clone this repository:

```bash
git clone https://github.com/Ronaldo-spec/Bookshelf-api.git
cd Bookshelf-api
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm run start
```

The API will run at:

```text
http://localhost:9000
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run start` | Start the API server |
| `npm run lint` | Run ESLint checking |

---

## Project Notes

This project is suitable for demonstrating:

- Backend API fundamentals
- Hapi.js routing
- RESTful endpoint design
- JSON request and response handling
- Basic validation and error handling logic

---

## Author

**Ronaldo Firmansyah**  
Programmer | Business Analyst | ERP/Application Support | SQL Reporting | Data Analyst

LinkedIn: [linkedin.com/in/ronaldofirmansyah](https://linkedin.com/in/ronaldofirmansyah)  
GitHub: [github.com/Ronaldo-spec](https://github.com/Ronaldo-spec)
