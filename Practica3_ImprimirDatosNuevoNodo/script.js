contenedor=document.getElementById("contenedor");
botonNuevo=document.getElementById("botonNuevo");
botonGuardar=document.getElementById("botonGuardar");
fechas=document.getElementsByClassName("input");
imprimir=document.getElementById("imprimir");


const Guardar=(e)=>{
    Lista_fecha=contenedor.querySelectorAll(".input");
    for(var i=0; i<Lista_fecha.length; i++){
        console.log(Lista_fecha[i].value);
    }
}

const imprimir_fechas=(e)=>{
    for(var i=0; i<fechas.length; i++){
        console.log(fechas[i]);
    }
}

const agregar_Nodo=()=>{
    var div = document.createElement("input");
    div.setAttribute("type", 'date');
    div.setAttribute("class", "input");
    contenedor.appendChild(div); 
}


botonGuardar.addEventListener("click", Guardar);
botonNuevo.addEventListener("click", agregar_Nodo);
imprimir.addEventListener("click", imprimir_fechas);