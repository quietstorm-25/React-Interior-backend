const router = require('express').Router();
const parser = require('../config/upload');
const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/authMiddleware');

router.post('/create', parser.single(`image`), verifyAdmin, createProduct);
router.get('/fetch-all', getProducts);
router.delete('/delete', verifyAdmin, deleteProduct);
router.put('/update', verifyAdmin, updateProduct);

module.exports = router;