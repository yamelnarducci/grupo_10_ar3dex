const { leerJSON } = require('../../data')

module.exports = (req,res) => {
    const {id} = req.session.userLogin;

    const users = leerJSON('users');

    const user = users.find(user => user.id == id)

    return res.render('users/profile', {
        ...user
    })
}