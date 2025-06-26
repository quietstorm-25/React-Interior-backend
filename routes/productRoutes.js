const router = require('express').Router();
const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/authMiddleware');

router.post('/create', verifyAdmin, createProduct);
router.get('/fetch-all', getProducts);
router.delete('/delete', verifyAdmin, deleteProduct);
router.put('/update', verifyAdmin, updateProduct);

module.exports = router;