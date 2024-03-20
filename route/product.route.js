const express = require("express");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
