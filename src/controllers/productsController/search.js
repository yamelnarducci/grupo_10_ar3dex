const db = require('../../database/models');
const { Op } = require('sequelize');

//const { leerJSON } = require('../../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = (req,res) => {

    const {keyword} = req.query;
    db.Product.findAll({
        where : { [Op.or]:
            [
                {name : {[Op.substring] : keyword }},
                {categoryId: keyword }
            ]
        }
        
    })
    .then(products => {
        return res.render('results', {
            products,
            keyword,
            toThousand
    })
    })
    .catch(error => {console.error(error)})
}