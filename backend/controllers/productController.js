import asynchandler from "express-async-handler";
import Product from "../models/productModel";

// Get all products
export const getallproducts = asynchandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

// Get product by ID
export const getproductById = asynchandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(product);
});

// Add a new product
export const addProduct = asynchandler(async (req, res) => {
    const { name, category, price } = req.body;

    if (!name || !category || !price) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const product = new Product({
        name,
        category,
        price
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// Delete a product
export const deleteProduct = asynchandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    await product.remove();
    res.status(200).json({ message: "Product removed successfully" });
});
