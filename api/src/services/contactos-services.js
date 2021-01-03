const Sequelize = require('sequelize');
const Contacto = require('../models').contacto;
const {Op} = require('sequelize');
exports.getAll = async (filtro = null)=>{
   //Equivalente a hacer un select
   //Llendo a buscar los contactos en la bd
   let contactos =  null;
   if(filtro == null){
     contactos = await Contacto.findAll({});
   }else{
       contactos = await Contacto.findAll({
        where:{
            [Op.or]:[
                {nombre:{[Op.like]: `%${filtro}%`}},
                {correo:{[Op.like]: `%${filtro}%`}},
                {telefono:{[Op.like]: `%${filtro}%`}}
            ]
        }
       });
   }
   return contactos;
};

exports.save = async(contacto)=>{
    return await Contacto.create(contacto);
};