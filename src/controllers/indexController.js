const db = require('../database/models')



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req,res) => {

        db.Product.findAll()
        .then(products => {
            return res.render('index', {
                products: products.filter(product => product.offer === true),
                toThousand
        })
        

        })
        .catch(error => console.log(error))
        
    },
    cart: (req,res) => {
        return res.render('productCart')
    },
    admin : async(req,res) => {
        try {
            const products = await db.Product.findAll();
            return res.render('dashboard', {
                products,
                
            });
        } catch (error) {
            console.error(error);
        }
    },
    searchAdmin: async (req, res) => {
        try {
            const { keyword } = req.query;
            const products = await db.Product.findAll({
                where: {
                    [db.Sequelize.Op.or]: [
                        db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('name')), 'LIKE', `%${keyword.toLowerCase()}%`),
                        db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('category')), 'LIKE', `%${keyword.toLowerCase()}%`)
                    ]
                }
            });
            return res.render('dashboard', {
                products,
                keyword
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error interno del servidor');
        }
    }
}