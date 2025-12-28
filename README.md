A secure and fully functional restaurant management and food ordering application built with Spring Boot. Designed to handle both admin operations and customer interactions on the backend.

The project includes:

Backend (Spring Boot + Spring Security) – JWT authentication, role-based access control for admins, staff, and users.

Ordering System – menu browsing, add-to-cart functionality, and order placement.

Admin Features – manage menus, reservations, staff, and reporting.

RESTful API Design – all business logic handled on the server side for security and scalability.

Secure Architecture – protected endpoints and robust backend logic with Spring Security.

# Restaurant Ordering System

Full-stack restaurant ordering application with Spring Boot backend and React frontend.

## Project Structure

- `/src` - Spring Boot backend source code
- `/client` - React frontend application

## Getting Started

### Backend (Spring Boot)

1. Navigate to project root
2. Run the application:
```bash
   ./mvnw spring-boot:run
```
3. Backend runs on `http://localhost:8080`

### Frontend (React)

1. Navigate to client folder:
```bash
   cd client
```
2. Install dependencies (first time only):
```bash
   npm install
```
3. Start the development server:
```bash
   npm start
```
4. Frontend runs on `http://localhost:3000`

## Technologies Used

### Backend
- Java 
- Spring Boot
- Spring Security
- JWT Authentication
- MySQL

### Frontend
- React
- Redux
- Material-UI
- Axios
- Formik