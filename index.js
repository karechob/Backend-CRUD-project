const express = require("express");//Imports the Express.js module.
const db = require("./db");// Imports the db object
const cors = require("cors");
const app = express();//Create an instance of the express application
const PORT = 8080;// Setting the port number for the server
app.use(cors())

//A middleware parser for JSON bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// Mount on API
app.use("/api", require("./api"));

app.get('/', (req, res) => {
  res.send('Hey this our API running 🥳')
})

app.use((error, req, res, next) => {
  console.log(error)
  res.send("hey this is my api not running")

})




// Define an asynchronous function to synchronize the DB
// {force: true} clear db

//Defining a function to start the server
const serverRun = () => {
// Start the server and listen on the specified port
    app.listen(PORT, () => {

 // Logging a message to indicate server is running
        console.log(`live on port: ${PORT}`)
    });
};

const syncDB = async() => await db.sync(); 


syncDB();
// Synchronize the database

serverRun();
//Starting the server

module.exports = app;
// Export the app object