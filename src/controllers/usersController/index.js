const login = require('./login');
const register = require('./register');
const processLogin = require('./processLogin')
const processRegister = require('./processRegister');
const logout = require('./logout')
const profile = require('./profile')

module.exports = {
    login,
    register,
    processLogin,
    processRegister,
    logout,
    profile
}