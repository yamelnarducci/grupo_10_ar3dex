module.exports = {
    add : (req,res)=> {
        return res.render('products/product-add')
    },
    
    detail: (req,res) => {
        return res.render('products/product-detail')
    }
    
}