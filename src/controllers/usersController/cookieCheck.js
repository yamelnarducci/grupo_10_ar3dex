module.exports = (req,res,next) => {
    if(req.cookies.Ar3dex_foreverLovers){
        req.session.userLogin = req.cookies.Ar3dex_foreverLovers
    }

    next()
}