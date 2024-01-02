const { leerJSON, escribirJSON } = require("../../data");
const User = require("../../data/user");

module.exports = (req,res) => {
    const userImage = req.file.userImage;
    const {name, surname, email, password, userCategory} = req.body;


    const newUser = new User(name, surname, email, password, userImage, userCategory);
    const users = leerJSON('users');

    users.push(newUser);

    escribirJSON(users, 'users')

    return res.redirect('/')
}