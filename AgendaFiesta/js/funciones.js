
//Guardar en el local storage
const agregarContacto = async (contacto)=>{
    let res = await axios.post("http://localhost:8080/contactos", contacto);
    return res.data;

};

//Obtener desde el localstorage
const obtenerContactos = async (filtro=null)=>{
    let res = null;
    console.log(filtro);
    if(filtro){
        res = await axios.get(`http://localhost:8080/contactos/${filtro}`);
    }else {
        res = await axios.get("http://localhost:8080/contactos");
    }
    let lista = res.data;
    return lista;
};
