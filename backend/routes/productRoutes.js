const express = require("express");

const validateToken = require("../middlewares/validateTokenHandler");

const { getallproducts, getproductById, addProduct, deleteProduct } = require("../controllers/productController");

const router=express.Router();
router.use(validateToken);
router.route("/products")
.get(getallproducts)
.post(addProduct);


router.route("/product/:id")
.get(getproductById)
.delete(deleteProduct);


module.exports= router;