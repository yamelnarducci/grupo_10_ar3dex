const login = require('./login');
const register = require('./register');
const processLogin = require('./processLogin')
const processRegister = require('./processRegister');
const logout = require('./logout')


module.exports = {
    login,
    register,
    processLogin,
    processRegister,
    logout
}