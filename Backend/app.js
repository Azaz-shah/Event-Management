const express = require("express");
const { connectQueue } = require("./Services/rabbitMq")
// const { connectDB } = require("./Services/DBconnection")
require("dotenv").config()
const cors = require("cors")
const app = express();

const PORT = 2010

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/v1/event", require("./Routes/event.route"))
app.use("/api/v1/contact", require("./Routes/contact.route"))
app.use("/api/v1/host", require("./Routes/host.route"))
app.use("/api/v1/contact", require("./Routes/contact.route"))
app.use("/api/v1/cost", require("./Routes/cost.route"))
app.use("/api/v1/marketing", require("./Routes/marketing.route"))
app.use("/api/v1/company", require("./Routes/company.route"))


connectQueue()

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});