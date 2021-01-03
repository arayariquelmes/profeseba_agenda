//npm init
//Para api rest
//npm install express --save
//Para que se recargue solo
//npm install -D nodemon
//Para generar la estructura de sequelize más facil
//npm install --save -g sequelize-cli
//Para usar bd
//npm install --save sequelize
//Soporte de mysql
//npm install --save mysql2
//Para responder en JSON
//npm install --save body-parser
//Para recibir peticiones de todos lados
//npm install --save cors
//Inicializa sequelize
//sequelize init

//Crea un modelo para la tabla contactos
//sequelize model:create --name contacto --attributes nombre:string,correo:string,telefono:string    
//sequelize db:migrate 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactosService = require('./services/contactos-services');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Definir las rutas
app.get('/', (req,res)=>{
    return res.send("Hola saludos a los wachilengos!");
});

app.get('/contactos', async (req,res)=>{
    let contactos = await contactosService.getAll();
    return res.send(contactos);
});

app.get('/contactos/:filtro', async (req,res)=>{
    let contactos = await contactosService.getAll(req.params.filtro);
    return res.send(contactos);
});

app.post("/contactos", async (req,res)=>{
    let contacto = req.body;
    return res.send(await contactosService.save(contacto));
});


app.listen(8080);