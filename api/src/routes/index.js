const contacto = require('../models/contacto');
const contactosService = require('../services/contactos_service');



exports.getAllContactos = async (req,res)=>{
    if(req.params.filtro){
        return res.send(await contactosService.getAll(req.params.filtro));
    }else {

        return res.send(await contactosService.getAll());
    }
}

exports.postContacto = async (req,res)=>{
    console.log(req.body);
    return res.send(await contactosService.save(req.body));
}

