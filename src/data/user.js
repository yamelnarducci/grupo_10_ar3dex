const bcryptjs = require('bcryptjs')

const crypto = require('crypto')

function User(name, surname, email, password, userImage, userCategory) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = bcryptjs.hashSync(password.trim(), 10);
    this.userImage = userImage ? userImage.filename : null;
    this.userCategory = userCategory;
}

module.exports = User