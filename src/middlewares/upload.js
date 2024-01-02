const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'public/images/products')
    },
    filename :  (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`)
    },
});

const upload = multer({
    storage,
});

module.exports = upload