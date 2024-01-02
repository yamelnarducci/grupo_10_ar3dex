const crypto = require('crypto')

function User(name, surname, email, password, userImage, userCategory) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = password.trim();
    this.userImage = userImage ? userImage.filename : null;
    this.userCategory = userCategory;
}

module.exports = User