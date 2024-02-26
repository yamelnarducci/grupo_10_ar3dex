const db = require('../../database/models');

module.exports = (req, res) => {
    const { id } = req.session.userLogin;

    db.User.findByPk(id,{ 
        include : ["address"],
    }).then(user => {
        // return res.send(user)
        return res.render('users/profile', { user });
    })
    .catch(error => console.log(error));
};