module.exports = (req,res, next) => {
    if(req.session.userLogin && req.session.userLogin.role === 2){
        return next()
    }

    return res.redirect('/')
}