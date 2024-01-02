const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'public/images/users')
    },
    filename : (req, file, callback) => {
        callback(null, `User_${Date.now()}${path.extname(file.originalname)}`)
    },
});

const userUpload = multer({
    storage,
});

module.exports = userUpload