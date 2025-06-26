const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//fetch all products from DB
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json("Product not found");
    res.json(product);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        //find the product by ID
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json("Product not found");
        //update the product details
        const updatedProduct = await Product.updateOne (
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json({message: "Updated Successfully"});
    } catch (err) {
        res.status(500).json(err.message);
    }
}

//delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json("Product not found");
    
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json("Product deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};