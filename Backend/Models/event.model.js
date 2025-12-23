const { getConnection } = require('../Services/DBconnection');

class Event {
    static async create(eventData) {
        const connection = getConnection();
        const { title, description, location, startDate, endDate, startTime, endTime } = eventData;
        
        const query = `
            INSERT INTO events (title, description, location, startDate, endDate, startTime, endTime)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        
        const [result] = await connection.execute(query, [
            title, description, location, startDate, endDate, startTime, endTime
        ]);
        
        return { id: result.insertId, ...eventData };
    }

    static async find() {
        const connection = getConnection();
        const [rows] = await connection.execute('SELECT * FROM events ORDER BY created_at DESC');
        return rows;
    }

    static async findById(id) {
        const connection = getConnection();
        const [rows] = await connection.execute('SELECT * FROM events WHERE id = ?', [id]);
        return rows[0] || null;
    }

    static async findByIdAndUpdate(id, updateData) {
        const connection = getConnection();
        const fields = Object.keys(updateData);
        const values = Object.values(updateData);
        
        const setClause = fields.map(field => `${field} = ?`).join(', ');
        const query = `UPDATE events SET ${setClause} WHERE id = ?`;
        
        await connection.execute(query, [...values, id]);
        return this.findById(id);
    }

    static async findByIdAndDelete(id) {
        const connection = getConnection();
        const event = await this.findById(id);
        if (event) {
            await connection.execute('DELETE FROM events WHERE id = ?', [id]);
        }
        return event;
    }
}

module.exports = Event;