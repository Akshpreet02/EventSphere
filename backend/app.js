const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

const eventRouter = require("./routes/event")
const userRouter = require("./routes/user")
const resetRouter = require("./routes/reset")

app.use(express.json());
app.use(cors());  //make sure you have this before you hit your routes using the app.use(router logic stuff)
app.use("/event", eventRouter)
app.use("/user", userRouter)
app.use("/reset", resetRouter)

mongoose.connect('mongodb+srv://admin:LYDHCmW2RrFiaWW7@cluster0.kw0emyr.mongodb.net/EventSphere')

app.use((err, req, res, next) => {   //global catch to prevent showing backend logic to the frontend
    console.error(err.stack); // Log error stack for debugging
    res.status(500).send('Something broke!'); // Send a generic error message
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;