module.exports = (req,res,next) => {
    if(req.cookies.ar3dex4EV3R_user){
        req.session.userLogin = req.cookies.ar3dex4EV3R_user
    }

    next()
}