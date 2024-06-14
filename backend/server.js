const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.route");

var app = express();
app.use(cors());

// Registering middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

// Calling for DB connection
connectDB();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Listening to port 8000");
});