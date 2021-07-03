contenedor=document.getElementById("contenedor");
boton=document.getElementById("boton");

const agregar_Nodo=()=>{
    var div = document.createElement("input");
    div.setAttribute("type", 'date');
    div.setAttribute("class", "input");
    contenedor.appendChild(div); 
}

boton.addEventListener("click", agregar_Nodo);