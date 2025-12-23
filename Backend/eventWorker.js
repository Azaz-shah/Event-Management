const express = require("express");
const connectQueue = require("./Services/rabbitMq");
const amqp = require("amqplib");

const startWorker = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();
        const queue = "eventQueue";

        channel.assertQueue(queue, { durable: true });
        channel.prefetch(1);

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(
            queue,
            async (msg) => {
                const secs = msg.content.toString().split(".").length - 1;

                console.log(" [x] Received %s", msg.content.toString());
                setTimeout(function () {
                    console.log(" [x] Done");
                    channel.ack(msg);
                }, secs * 1000);
                channel.ack(msg);
            },

            { noAck: false }
        );
    } catch (error) {
        console.error("Error in startWorker:", error);
    }
};

startWorker();