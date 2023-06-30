const express = require("express");
const db = require("./db");

const app = express();
const PORT = 8080;
app.use(express.json())
// Mount on API
app.use("/api", require("./api"));

const syncDB = async() => await db.sync({}); // {force: true} clear db

const serverRun = () => {
    app.listen(PORT, () => {
        console.log(`live on port: ${PORT}`)
    });
};


syncDB();
serverRun();

module.exports = app;