# Student Management REST API

A simple REST API built with **Node.js** and **Express.js** to manage student records using CRUD operations.

## Features

* Get all students
* Get a student by ID
* Add a new student
* Update student details
* Delete a student
* Request logging middleware
* JSON request and response handling

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Nodemon

## Project Structure

```text
Student-Management-REST-API/
│
├── data/
│   └── students.js
│
├── middleware/
│   └── logger.js
│
├── routes/
│   └── studentRoutes.js
│
├── index.js
├── package.json
└── package-lock.json
```

## Installation

Clone the repository and navigate into the project folder:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Student-Management-REST-API
```

Install the required dependencies:

```bash
npm install
```

## Running the Server

Start the server using:

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/students`     | Get all students    |
| GET    | `/students/:id` | Get a student by ID |
| POST   | `/students`     | Add a new student   |
| PUT    | `/students/:id` | Update a student    |
| DELETE | `/students/:id` | Delete a student    |

## Sample Student Data

The API currently contains the following student records:

```json
[
    {
        "id": 1,
        "name": "Hiya",
        "age": 19,
        "course": "Artificial Intelligence"
    },
    {
        "id": 2,
        "name": "Rakhi",
        "age": 20,
        "course": "Data Science"
    },
    {
        "id": 3,
        "name": "Deepika",
        "age": 21,
        "course": "Cyber Security"
    }
]
```

## Example POST Request

**Endpoint:**

```text
POST /students
```

**Request Body:**

```json
{
    "name": "Ananya",
    "age": 20,
    "course": "Computer Science"
}
```

## Example Response

```json
{
    "id": 4,
    "name": "Ananya",
    "age": 20,
    "course": "Computer Science"
}
```

## Status Codes

* `200` – Request successful
* `201` – Resource created successfully
* `404` – Student not found

## Author

**Hiya**
