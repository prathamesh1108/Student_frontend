# Student CRM Full Stack Application

## Overview
The Student CRM Full Stack Application is a web-based solution designed to manage student records. It provides functionalities to add, edit, view, and delete student information, including name, address, and email. The application is built with a React.js frontend and a Spring Boot backend, connected via REST APIs.

## Features
- **Add Student**: Create new student records.
- **View Students**: List all students with serial numbers.
- **Edit Student**: Modify existing student records.
- **Delete Student**: Remove student records.

## Technologies Used

### Frontend
- **React.js** for building the user interface.
- **Material-UI (MUI)** for responsive and stylish components.
- **React Router** for routing.

### Backend
- **Spring Boot** for RESTful APIs.
- **MySQL** as the database.

## Setup Instructions

### Prerequisites
- **Node.js** and **npm** (for frontend)
- **Java JDK 11 or higher** (for backend)
- **MySQL** database

### Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

### Backend Setup
1. Open the backend project in your IDE.
2. Configure MySQL database credentials in `application.properties`.
3. Run the Spring Boot application.
4. Backend will run on `http://localhost:8080`.

## API Endpoints

### Student Endpoints
- **GET** `/student/getAll` - Retrieve all students.
- **GET** `/student/get/{id}` - Retrieve a specific student.
- **POST** `/student/add` - Add a new student.
- **PUT** `/student/update/{id}` - Update an existing student.
- **DELETE** `/student/delete/{id}` - Delete a student.

## Usage
1. Add new students via the **Add Student** form.
2. View the list of students with serial numbers.
3. Edit or delete students using respective buttons.

## Screenshots

#Home-Page

![React App and 4 more pages - Pratham - Microsoft​ Edge 3_22_2025 6_23_30 PM](https://github.com/user-attachments/assets/98d799d7-00ca-48f5-b255-7372299a6b8d)

#Add-Student Page

![Add-page](https://github.com/user-attachments/assets/bdc394ed-69fa-4720-b6d1-716c7c0ff719)

#View-Page

![Edit-page](https://github.com/user-attachments/assets/dee29504-9bab-4a60-ab15-7f9cbd8c875f)


## Author
- **Prathamesh Subhash Vishwakarma**
