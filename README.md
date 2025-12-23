# Event Management System

A full-stack event management application built with React.js frontend and Node.js backend.

## Project Structure

```
EventManagement/
├── Backend/           # Node.js API server
│   ├── Controllers/   # Route controllers
│   ├── Models/        # Database models
│   ├── Routes/        # API routes
│   ├── Services/      # Business logic
│   └── Validations/   # Input validation
└── Frontend/
    └── App/          # React.js application
        └── src/
            └── components/
```

## Features

- Event creation and management
- Guest list management with priority levels
- Host details management
- Cost center tracking
- Marketing campaign management
- Event approval workflow

## Setup Instructions

### Backend Setup
1. Navigate to Backend folder: `cd Backend`
2. Install dependencies: `npm install`
3. Create `.env` file with database configuration
4. Start server: `npm start`

### Frontend Setup
1. Navigate to Frontend/App folder: `cd Frontend/App`
2. Install dependencies: `npm install`
3. Start development server: `npm start`

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Validation**: Joi
- **Message Queue**: RabbitMQ