const { leerJSON, escribirJSON } = require('../../data');
const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require('fs')


module.exports = (req, res) => {
    const { name, surname, email, userCategory, province, city, address, role } = req.body;

    const { id } = req.params;
    const { userImage } = req.files

    const users = leerJSON('users');

    const errors = validationResult(req);

    if (errors.isEmpty()) {


        const usersUpdated = users.map(user => {
            if (user.id == id) {

                (userImage 
                && existsSync('public/images/users/' + userImage.filename)) 
                && unlinkSync('public/images/users/' + userImage.filename);

                user.name = name.trim();
                user.surname = surname;
                user.email = email.trim();
                user.province = province.trim();
                user.city = city.trim();
                user.address = address.trim();
                user.userCategory = userCategory;
                user.userImage = userImage ? userImage[0].filename : null;
            }
            return user
        })
        
        escribirJSON(usersUpdated, 'users')

        return res.redirect('/')
    }else{
        (userImage 
        && existsSync('public/images/users/' + userImage.filename)) 
        && unlinkSync('public/images/users/' + userImage.filename);

        const user = users.find(user => user.id == id);

        return res.render('users/profile', {
            errors: errors.mapped(),
            old : req.body,
            ...user,
        })
    }



}