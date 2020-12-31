
//Guardar en el local storage
const agregarContacto = (contacto)=>{
   let lista = obtenerContactos();
   lista.push(contacto);
   localStorage.setItem("contactos", JSON.stringify(lista));

};

//Obtener desde el localstorage
const obtenerContactos = (filtro=null)=>{
    //Esto devuelve un string, o undefined
    let lista = localStorage.getItem("contactos");
    if(lista){
        lista = JSON.parse(lista);
    } else {
        lista = [];
    }
    //Estan filtrando
    if(filtro != null){
        //Filtrar la lista para traer solo cuando el filtro esta en alguna parte
        lista = lista.filter( c=> c.nombre.includes(filtro) 
        || c.telefono.includes(filtro)
        || c.correo.includes(filtro));
    }

    return lista;
};
