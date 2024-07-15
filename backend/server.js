const express = require("express");
require("dotenv").config(); // No need to assign it to a variable
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

app.get('/api/contact', (req, res) => {
    res.json("Get all contacts");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
