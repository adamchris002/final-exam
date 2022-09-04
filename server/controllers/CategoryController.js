const { category } = require("../models");

class CategoryController {
  static async getCategories(req, res) {
    try {
      let result = await category.findAll();

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addPage(req, res) {}
  static async add(req, res) {
    try {
      const { name } = req.body;

      let creates = await category.create({
        name,
      });

      res.json(creates);
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let deletes = await category.destroy({
        where: { id },
      });

      deletes === 1
        ? res.json({
            message: `Category with id of ${id} has been deleted`,
          })
        : res.json({
            message: `Category with id of ${id} has not been deleted`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async updatePage(req, res) {}
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      let updates = await category.update(
        {
          name,
        },
        {
          where: { id },
        }
      );

      updates[0] === 1
        ? res.json({
            message: `Category with id of ${id} has been updated`,
          })
        : res.json({
            message: `Category with id of ${id} has not been updated`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
