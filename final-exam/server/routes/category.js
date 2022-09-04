const categoryRoute = require('express').Router();
const {CategoryController} = require('../controllers');

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.get("/add", CategoryController.addPage);
categoryRoute.post("/add", CategoryController.add);
categoryRoute.get("/delete/:id", CategoryController.delete);
categoryRoute.get("/update/:id", CategoryController.updatePage);
categoryRoute.put("/update/:id", CategoryController.update);

module.exports = categoryRoute;
