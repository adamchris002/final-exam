const { fruit } = require("../models");

class FruitController {
  static async getFruits(req, res) {
    try {
      let result = await fruit.findAll();

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addPage(req, res) {}
  static async add(req, res) {
    try {
      const { name, image, price, stock, categoryId, brandId } = req.body;

      let creates = await fruit.create({
        name,
        image,
        price,
        stock,
        categoryId,
        brandId,
      });

      res.json(creates);
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let deletes = await fruit.destroy({
        where: { id },
      });

      deletes === 1
        ? res.json({
            message: `Fruit with id of ${id} has been deleted`,
          })
        : res.json({
            message: `Fruit with id of ${id} has not been deleted`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async updatePage(req, res) {}
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, image, price, stock, categoryId, brandId } = req.body;

      let updates = await fruit.update(
        {
          name,
          image,
          price,
          stock,
          categoryId,
          brandId,
        },
        {
          where: { id },
        }
      );

      updates[0] === 1
        ? res.json({
            message: `Fruit with id of ${id} has been updated`,
          })
        : res.json({
            message: `Fruit with id of ${id} has not been updated`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = FruitController;
