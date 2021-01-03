
document.querySelector("#registrar-btn").addEventListener('click', async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let telefono = document.querySelector("#telefono-txt").value.trim();

    let objeto = {nombre:nombre,correo:correo,telefono:telefono};
    await agregarContacto(objeto);
    Swal.fire("Agregado","Contacto registrado!", "info");
    //Limpiar el formulario
    document.querySelector("#nombre-txt").value = "";
    document.querySelector("#correo-txt").value = "";
    document.querySelector("#telefono-txt").value = "";
});