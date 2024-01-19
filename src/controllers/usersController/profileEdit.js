const fs = require('fs');
const { validationResult } = require('express-validator');
const { leerJSON, escribirJSON } = require('../src/data');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {

    const userId = req.user.id;
    const users = leerJSON('users');
    const updatedUserData = {
        name: req.body.name,
        surname: req.body.surname,
    };

    const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, ...updatedUserData } : user
    );

    escribirJSON('users', updatedUsers);

    return res.redirect('/perfil');
    } else {
    if (req.files.userImage) {
        fs.existsSync(`./public/images/users/${req.files.userImage[0].filename}`) &&
        fs.unlinkSync(`./public/images/users/${req.files.userImage[0].filename}`);
    }

    return res.render('users/profile', {
        old: req.body,
        errors: errors.mapped(),
    });
  }
};