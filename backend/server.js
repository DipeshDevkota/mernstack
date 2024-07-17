const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
dotenv.config({ path: './.env' });

connectDB();
const app = express();

const port = process.env.PORT || 5002; // Change the port here

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
