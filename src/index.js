const express = require("express");
const app = express();
const db = require("../models/index");
const router = require('./category/router')
const initRoutes = require('./image/router')

global.__basedir = __dirname;

const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
initRoutes(app);

app.use('/', router) 

db.sequelize.sync();


app.listen(port, ()=>{
    console.log(`${port}chi port eshitilyapti...`);
})

