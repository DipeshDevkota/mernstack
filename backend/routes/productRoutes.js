const express = require("express");
const { getallproducts, getproductById, addProduct, deleteProduct } = require("../controllers/productController");
// const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();

// router.use(validateToken);

router.route("/products")
    .get(getallproducts)
    .post(addProduct);

router.route("/products/:id")
    .get(getproductById)
    .delete(deleteProduct);

module.exports = router;
