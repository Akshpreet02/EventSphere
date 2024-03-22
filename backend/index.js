const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const multer = require("multer");
const User = require("./models/User");

const eventRouter = require("./routes/event")
const userRouter = require("./routes/user")

app.use(express.json());
app.use(cors());  //make sure you have this before you hit your routes using the app.use(router logic stuff)
app.use("/event", eventRouter)
app.use("/user", userRouter)

mongoose.connect('mongodb+srv://admin:LYDHCmW2RrFiaWW7@cluster0.kw0emyr.mongodb.net/EventSphere')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

app.post('/upload', upload.single('file'), (req, res) => {
    User.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.use((err, req, res, next) => {   //global catch to prevent showing backend logic to the frontend
    console.error(err.stack); // Log error stack for debugging
    res.status(500).send('Something broke!'); // Send a generic error message
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});