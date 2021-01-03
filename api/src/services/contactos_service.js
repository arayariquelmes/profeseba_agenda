const Sequelize = require('sequelize');
const Contacto  = require('../models').contacto;
const {Op} = require('sequelize');

exports.getAll = async (filtro = null)=>{
    let usuarios = null;
    if(filtro == null){
        usuarios = await Contacto.findAll({});
    }else {
        usuarios = await Contacto.findAll({
            where:{
                [Op.or]:[
                    {nombre:{[Op.like]: `%${filtro}%`}},
                    {correo:{[Op.like]: `%${filtro}%`}},
                    {telefono:{[Op.like]: `%${filtro}%`}}
                ]
            }
        })
    }
    
    return usuarios;
};

exports.save = async (contacto)=>{
    return await Contacto.create(contacto);
};


