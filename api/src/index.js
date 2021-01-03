//npm install express --save
//npm install -D nodemon
//npm install --save -g sequelize-cli
//npm install --save sequelize
//npm install --save mysql2
//npm install --save body-parser
//npm install --save cors
//Inicializa sequelize
//sequelize init

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    return res.send("Hola desde express");
})

app.get('/contactos', routes.getAllContactos);
app.get('/contactos/:filtro', routes.getAllContactos);
app.post('/contactos/', routes.postContacto);

app.listen(process.env.PORT || 8080);