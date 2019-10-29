require ('dotenv').config();

var express = require('express');
var app = express();
var user = require('./controllers/usercontroller');
var plant = require('./controllers/plantcontroller')
var sequelize = require('./db');

sequelize.sync();

app.use(express.json());

app.use(require('./middleware/headers'))

app.use('/user', user);

app.use(require('./middleware/validate-session'));

app.use('/plant', plant);

app.listen(3000, function(){
    console.log("App is listening on 3000.")
});