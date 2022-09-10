var express = require('express');
const {addProduct,createProduct, admin, destroy, editProduct, editProductProcess, detail } = require('../controllers/productControllers');
const { uploadImageProduct,uploadImageNewProduct } = require('../middlewares/uploadImageProducts');
var router = express.Router();


// /products/ //
router.get('/addProduct',addProduct);
router.post('/createProduct',uploadImageNewProduct.single('image'),createProduct);
router.get('/detail',detail);
router.get('/admin',admin);
router.delete('/destroy/:id',destroy);
router.get('/editProduct/:id',editProduct);
router.put('/editProduct/:id', uploadImageProduct.single('image') ,editProductProcess);


module.exports = router;