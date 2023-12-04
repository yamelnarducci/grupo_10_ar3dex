module.exports = {
    detail : (req,res) => {
        return res.render('products/product-detail')
    },
    add : (req,res) => {
        return res.render('products/product-add')
    },
    edit : (req,res) => {
        return res.render('products/product-edit')
    }

}