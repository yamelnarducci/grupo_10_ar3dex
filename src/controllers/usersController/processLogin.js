module.exports = (req,res) => {
    const errors = validationResult(req);
    const {email, remember} = req.body;

    if(errors.isEmpty()){

        const {id, name, role} = leerJSON('users').find(user => user.email === email)

        req.session.userLogin = {
            id,
            name,
            role
        }

        remember && res.cookie('Ar3dex forever!!!', req.session.userLogin, {
            maxAge : 1000 * 60 * 2
        })

        return res.redirect('/')

    }else {
        return res.render('users/login',{
            errors : errors.mapped()
        })
    }
}