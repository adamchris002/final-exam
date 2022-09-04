// require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public/css"))

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})