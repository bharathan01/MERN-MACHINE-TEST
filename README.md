# Employee Details Management

This project is an Employee Details Management system built using the MERN stack. It includes functionality for storing employee images using Multer, authentication with JWT, and secure password storage with bcrypt. This project was created as part of a machine test for an interview.

## Technologies Used

- **MongoDB**: Database for storing employee data.
- **Express.js**: Server framework.
- **React**: Front-end framework.
- **Node.js**: JavaScript runtime for the server.
- **Multer**: Middleware for handling `multipart/form-data` for image uploads.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **bcrypt**: For hashing passwords.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/employee-details-management.git
    cd employee-details-management
    ```

2. **Install server dependencies**:

    ```bash
    cd back-end
    npm install
    ```

3. **Install client dependencies**:

    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the `server` directory and add the following:

    ```env
    PORT=8000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the application**:

    Start the server:

    ```bash
    cd front-end
    npm start
    ```

    Start the client:

    ```bash
    cd ../client
    npm start
    ```

6. **Open your browser**:

    Navigate to `http://localhost:5173` to view the application.

## API Endpoints
- **POST /api/auth/login**: Log in an existing user.
- **GET /api/employee-details**: Get all employees (protected).
- **POST /api/create-employe**: Add a new employee (protected).
- **PUT /api/edit-employe/:id**: Update an employee (protected).
- **DELETE /api/delete-employe/:id**: Delete an employee (protected).
