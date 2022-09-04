const {brand} = require("../models")

class BrandController {
    static async getBrands(req, res) {
        try {
            let result = await brand.findAll();
      
            res.json(result);
          } catch (err) {
            res.json(err);
          }
    }
    static async addPage(req, res) {
        
    }
    static async add(req, res) {
        try {
            const { name, image, city, total_employees } = req.body;
      
            let creates = await brand.create({
              name, image, city, total_employees
            });
      
            res.json(creates);
          } catch (err) {
            res.json(err);
          }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
      
            let deletes = await brand.destroy({
              where: { id },
            });
      
            deletes === 1
              ? res.json({
                  message: `Brand with id of ${id} has been deleted`,
                })
              : res.json({
                  message: `Brand with id of ${id} has not been deleted`,
                });
          } catch (err) {
            res.json(err);
          }
    }
    static async updatePage(req, res) {

    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, image, city, total_employees } = req.body;
      
            let updates = await brand.update(
              {
                name, image, city, total_employees
              },
              {
                where: { id },
              }
            );
      
            updates[0] === 1
              ? res.json({
                  message: `Brand with id of ${id} has been updated`,
                })
              : res.json({
                  message: `Brand with id of ${id} has not been updated`,
                });
          } catch (err) {
            res.json(err);
          }
    }
}

module.exports = BrandController;