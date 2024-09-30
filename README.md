# Job Portal

## Description

This is a full-stack job portal application. The project is divided into two main parts:

1. **Backend**: This part of the application manages the server-side logic, handling requests and communicating with the database.
2. **Frontend**: The frontend provides the user interface for the job portal, allowing users to browse jobs, apply for positions, and interact with the platform.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js (assuming, based on the `public` and `src` folders)
- **Database**: (e.g., MongoDB, MySQL — mention if relevant)
- **Others**: Middleware, Utilities, etc.

## Project Structure

### Backend

The backend folder contains the following:

- `controllers/`: Business logic for handling requests (e.g., job postings, applications).
- `middleware/`: Middleware functions for request/response handling.
- `models/`: Database models and schemas.
- `routes/`: API routes for interacting with the backend.
- `utils/`: Utility functions.

### Frontend

The frontend folder is structured as follows:

- `public/`: Public files (e.g., HTML, images, and other assets).
- `src/`: Contains the main React application code (components, hooks, state management, etc.).

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

2. Install dependencies for both the backend and frontend:

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

3. Create an `.env` file in the backend directory with the necessary environment variables (e.g., database connection strings, API keys).

```bash
# Example .env file for backend
PORT=5000
DB_URL=mongodb://localhost:27017/job-portal
```

4. Start the backend and frontend servers:

```bash
# Backend
cd backend
npm run start

# Frontend
cd frontend
npm start
```

The backend should run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

---


### 1. PORT
This variable specifies which port the server will run on. For example, if set to `9000`, the application will be accessible at `localhost:9000`.

```
PORT = 9000
```

### 2. DATABASE
This variable defines the MongoDB database connection URL. The project is configured to connect to a MongoDB Atlas database. The URL below includes the connection details:

```
DATABASE = mongodb+srv://<username>:<password>@jobportalapi.bhxdr.mongodb.net/
```


### 3. JWT_SECRET
This variable contains the secret key used for JSON Web Token (JWT) authentication in the application. The key is required to securely generate and verify JWT tokens.

```
JWT_SECRET = <your-secret-key>
```

> **Note:** This key is used to sign and verify JWT tokens. Keep this key confidential and avoid sharing it in public projects for security reasons.

### Security Recommendations

- The `.env` file contains sensitive information, so it should be added to the `.gitignore` file and excluded from the repository.
- Passwords, API keys, and secret information should never be included directly in the codebase.
- For secure management of secret information in a production environment, consider using a trusted solution such as AWS Secrets Manager or Azure Key Vault.


## Features

- **User Registration and Authentication**: Users can create accounts and log in to apply for jobs.
- **Job Listings**: Companies can post job opportunities.
- **Job Applications**: Users can apply for jobs and manage their applications.
- **Search and Filters**: Search for jobs based on criteria such as location, job type, and keywords.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.
