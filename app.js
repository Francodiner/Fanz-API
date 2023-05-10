//Dependencies
const express = require("express");

// Express instance
const app = express();

app.use(express.json());

//Routes imports
const eventRouter = require("./routes/event");
const addressRouter = require("./routes/address");

//Routes
app.use("/event-attendees", eventRouter);
app.use("/address", addressRouter);

module.exports = app;
