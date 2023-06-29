const express = require("express");
const db = require("./db");

const app = express();
const PORT = "8080";

// Mount on API
app.use("/api", require("./api"));

const syncDB = () => db.sync(); // {force: true} clear db

const serverRun = () => {
    app.listen(PORT, () => {
        console.log(`live on port: ${PORT}`)
    });
};


syncDB();
serverRun();

module.exports = app;