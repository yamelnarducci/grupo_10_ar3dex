const bcryptjs = require('bcryptjs')
const crypto = require('crypto')

function User(name, surname, email, password, userCategory, userImage) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = bcryptjs.hashSync(password.trim(), 10);
    this.userCategory = userCategory;
    this.province = "";
    this.city = "";
    this.address = "";
    this.userImage = userImage ? userImage[0].filename : null;
    this.role = "user";
    
}

module.exports = User