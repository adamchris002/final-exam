const route = require('express').Router();

route.get('/', (req, res) => {
    res.send("ini halaman home")
}) 

const brandRoutes = require('./brand');
const categoryRoutes = require('./category');
const fruitRoutes = require('./fruit');

route.use('/brands', brandRoutes)
route.use('/categories', categoryRoutes)
route.use('/fruits', fruitRoutes)

module.exports = route