const path = require('path');
const multer = require('multer');


// MULTER FOR EDIT PRODUCT
const storageImageProduct = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/images/productsImage' )
    },
    filename : (req,file,callback) => {
        callback(null,'auto-' + Date.now() + path.extname(file.originalname))
        
    }
});

const uploadImageProduct = multer({
    storage : storageImageProduct
});

// MULTER FOR ADD PRODUCT
const storageImageNewProduct = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/images/productsImage' )
    },
    filename : (req,file,callback) => {
        callback(null,'auto-' + Date.now() + path.extname(file.originalname))
        
    }
});

const uploadImageNewProduct = multer({
    storage : storageImageNewProduct
});

module.exports = {
    uploadImageProduct,
    uploadImageNewProduct
}