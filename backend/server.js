const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes")
// Load environment variables
dotenv.config({ path: './env' });

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the product routes
app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
