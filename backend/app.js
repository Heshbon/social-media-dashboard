var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes/routes");
var cors = require("cors");

var app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/media_feed")
    .then(() => {
        console.log("Database connected successfully.");
        // Start the server only after successful connection
        app.listen(3000, () => {
            console.log("Running on Base URL http://127.0.0.1:3000");
        });
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });

// Use the routes
app.use("/api", routes);