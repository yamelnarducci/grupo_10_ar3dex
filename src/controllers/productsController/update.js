const { existsSync, unlinkSync } = require("fs");
const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const mainImage = req.files.mainImage;
        const images = req.files.images;

        const {
            name,
            price,
            categoryId,
            description,
            offer,
            discount
        } = req.body;

        const { id } = req.params;

        const product = await db.Product.findByPk(id, {
            include: ['images']
        });

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }

        if (images) {
            existsSync("public/images/" + product.images) &&
            unlinkSync("public/images/" + product.images);
        }

        await db.Product.update(
            {
                name: name.trim(),
                price,
                description: description.trim(),
                offer: +offer,
                discount,
                mainImage: mainImage ? mainImage[0].filename : null,
                categoryId
            },
            {
                where: {
                    id,
                }
            },
        );

        if (images) {
            for (const image of product.images) {
                existsSync("public/images/" + image.file) &&
                unlinkSync("public/images/" + image.file);
            }

            await db.Image.destroy({
                where: {
                    id_product: id
                }
            });

            const imagesDB = images.map(image => {
                return {
                    file: image.filename,
                    id_product: product.id
                };
            });

            await db.Image.bulkCreate(imagesDB, {
                validate: true
            });

            return res.redirect("/admin");
        } else {
            return res.redirect("/admin");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
};