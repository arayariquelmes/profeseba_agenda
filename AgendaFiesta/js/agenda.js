const cargarTabla = (contactos)=>{
    //1. Ir a buscar el tbody
    const tbody = document.querySelector("#tbody-contactos");
    //Vaciar el contenido del cuerpo de la tabla
    tbody.innerHTML = '';
    //2. Recorrer la lista de contactos
    contactos.forEach( c=>{
        let tr = document.createElement('tr');
        let tdNombre = document.createElement("td");
        tdNombre.innerText = c.nombre;
        let tdCorreo = document.createElement("td");
        tdCorreo.innerText = c.correo;
        let tdTelefono = document.createElement("td");
        tdTelefono.innerText = c.telefono;
        tr.appendChild(tdNombre);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdTelefono);
        tbody.appendChild(tr);
    });
    //3. Por cada contacto generar una fila de la tabla
};
window.addEventListener("DOMContentLoaded", async ()=>{
    let contactos = await obtenerContactos();
    cargarTabla(contactos);
});

document.querySelector("#filtro-txt").addEventListener('input', async ()=>{
    let filtro = document.querySelector("#filtro-txt").value.trim();
    let contactos = await obtenerContactos(filtro);
    cargarTabla(contactos);
});