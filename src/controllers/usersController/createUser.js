const { leerJSON, escribirJSON } = require("../../data");
const User = require("../../data/user");

module.exports = (req,res) => {
    const {name, surname, email, password, userCategory} = req.body;

    const userImage = req.file.userImage;

    const newUser = new User(name, surname, email, password, userCategory, userImage);
    const products = leerJSON('users');

    products.push(newUser);

    escribirJSON(products, 'users')

    return res.redirect('/')
}