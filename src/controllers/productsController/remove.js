const {existsSync, unlinkSync} = require('fs');
const db = require('../../database/models');


module.exports = (req,res) => {

    const {id} = req.params;

db.Product.findByPk(id, {
    include : ['images']
})
.then(({mainImage, images}) => {
    existsSync(`public/images/products/${mainImage}`) &&
    unlinkSync(`public/images/products/${mainImage}`)

    images.forEach((image) => {
        existsSync(`public/images/products/${image.name}`) &&
        unlinkSync(`public/images/products/${image.name}`);  
    });

    db.Image.destroy({
        where : {
            id_product : id
        }
    }).then(()=> {

        db.Product.destroy({
         where : {
                id
                }
        }).then(()=> {
            return res.redirect('/admin')
    })
    })
})
    .catch(error => console.log(error))

}