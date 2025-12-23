const amqp = require("amqplib");

let channel = null

const connectQueue = async (req, res) => {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        channel = await connection.createChannel();
        console.log("Connected to RabbitMQ");
    } catch (error) {
        console.log("RabbitMQ Connection Error:", error);
    }
}

const getChannel = () => {
    return channel
}

module.exports = {
    connectQueue,
    getChannel
}