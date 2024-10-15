# FastAPI CRUD Application with JWT Authentication and Celery

This is a FastAPI project that implements user registration and authentication using JWT tokens. The project includes CRUD operations for candidates and their associated skills, along with an asynchronous task for generating candidate reports in CSV format using Celery. The project also includes Docker and Docker Compose configurations for containerized deployment, with PostgreSQL as the database.

## Features

### User Authentication
- **Register User**: Register a new user with an email and password. If a user with the same email already exists, the API will return a 400 Bad Request response.
- **Login User**: Login an already registered user by providing email and password. A JWT token is returned upon successful login.

### Candidate Management
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations for candidate records.
- **Skills Management**: Each candidate has associated skills. CRUD operations are also provided for managing these skills.

### Celery Integration
- **Generate Candidate Report**: A Celery task is implemented to generate a CSV report for candidates and save it to the system. The API will return the file path once the report is generated.

## Technology Stack
- **FastAPI**: The web framework used for building the API.
- **JWT**: Used for secure authentication and session management.
- **PostgreSQL**: The relational database used for storing user, candidate, and skill data.
- **Celery**: Used for asynchronous task processing (e.g., generating the candidate report).
- **Docker**: Containerized deployment with a `Dockerfile` and `docker-compose.yml` for easy setup and management.

## Getting Started

### Prerequisites
- **Docker**: Ensure Docker is installed on your machine.
- **Docker Compose**: To orchestrate the containers.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd fastapi-crud-app
