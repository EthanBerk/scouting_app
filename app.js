// app.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

// Import routes
let teamRouter = require("./routes/api/teams")
// Use Api routes in the App
app.use('/api', teamRouter)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));