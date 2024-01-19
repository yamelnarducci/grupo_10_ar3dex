module.exports = (req,res,next) => {
    if(req.cookies.AR3DEX4EV3R_user){
        req.session.userLogin = req.cookies.AR3DEX4EV3R_user
    }

    next()
}