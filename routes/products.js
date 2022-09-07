var express = require('express');
const {addProduct,createProduct, admin, destroy, editProduct, editProductProcess } = require('../controllers/productControllers');
var router = express.Router();


// /users/ //
router.get('/addProduct',addProduct);
router.post('/createProduct',createProduct);
router.get('/admin',admin);
router.delete('/destroy/:id',destroy);
router.get('/editProduct/:id',editProduct);
router.put('/editProduct/:id', editProductProcess)


module.exports = router;