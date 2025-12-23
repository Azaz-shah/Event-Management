const mysql = require('mysql2/promise');

let connection;

const connectDB = async () => {
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'eventmanagement'
        });
        console.log("MySQL Database connected");
        
        // Create tables if they don't exist
        await createTables();
    } catch (error) {
        console.log("Database connection error:", error);
    }
}

const createTables = async () => {
    const createEventsTable = `
        CREATE TABLE IF NOT EXISTS events (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            location VARCHAR(255),
            startDate DATE,
            endDate DATE,
            startTime TIME,
            endTime TIME,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;
    
    await connection.execute(createEventsTable);
    console.log("Events table created/verified");
}

const getConnection = () => connection;

module.exports = { connectDB, getConnection }