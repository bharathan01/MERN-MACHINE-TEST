# Employee Details Management

This project is an Employee Details Management system built using the MERN stack. It includes functionality for storing employee images using Multer, authentication with JWT, and secure password storage with bcrypt. This project was created as part of a machine test for an interview.

## Features

- **User Authentication**: Users can register and log in securely.
- **Employee Management**: Add, edit, delete, and view employee details.
- **Image Upload**: Store employee images using Multer.
- **Secure Password Storage**: Passwords are hashed using bcrypt.
- **Protected Routes**: Use JWT to protect routes and ensure only authenticated users can access certain endpoints.

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
    cd server
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
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the application**:

    Start the server:

    ```bash
    cd server
    npm start
    ```

    Start the client:

    ```bash
    cd ../client
    npm start
    ```

6. **Open your browser**:

    Navigate to `http://localhost:3000` to view the application.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.
- **GET /api/employees**: Get all employees (protected).
- **POST /api/employees**: Add a new employee (protected).
- **PUT /api/employees/:id**: Update an employee (protected).
- **DELETE /api/employees/:id**: Delete an employee (protected).

## Usage

1. **Register a new user**: Navigate to the registration page and create an account.
2. **Log in**: Use the credentials to log in.
3. **Manage employees**: Add, edit, and delete employee details.

## License

This project is licensed under the MIT License.
