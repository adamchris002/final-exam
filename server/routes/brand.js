const brandRoute = require('express').Router();
const {BrandController} = require('../controllers');

brandRoute.get("/", BrandController.getBrands);
brandRoute.get("/add", BrandController.addPage);
brandRoute.post("/add", BrandController.add);
brandRoute.delete("/delete/:id", BrandController.delete);
brandRoute.get("/update/:id", BrandController.updatePage);
brandRoute.put("/update/:id", BrandController.update);

module.exports = brandRoute;
