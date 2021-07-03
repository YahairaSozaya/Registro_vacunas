anadir=document.getElementById("anadir");
contenedor2=document.getElementById("contenedor2");
contenedor1=document.getElementById("contenedor1");
guardar=document.getElementById("guardar");
fechas=document.getElementsByClassName("input");

const Agregar_Nodo=(e)=>{
    var fila_vacuna = document.createElement("div");
    fila_vacuna.setAttribute("class", 'fila_vacuna');
    var label=document.createElement("p");
    label.innerText = 'Refuerzo';
    label.setAttribute("class", "label");
    var input=document.createElement("input");
    input.setAttribute("class", "input");
    input.setAttribute("type", "date");
    fila_vacuna.appendChild(label);
    fila_vacuna.appendChild(input);
    contenedor2.appendChild(fila_vacuna); 
}

const Guardar=(e)=>{
    Lista_fecha2=contenedor2.querySelectorAll(".input");
    for(var i=0; i<Lista_fecha2.length; i++){
        console.log(Lista_fecha2[i].value);
    }

    Lista_fecha1=contenedor1.querySelectorAll(".input");
    for(var i=0; i<Lista_fecha1.length; i++){
        console.log(Lista_fecha1[i].value);
    }
}

anadir.addEventListener("click", Agregar_Nodo);
guardar.addEventListener("click", Guardar);


