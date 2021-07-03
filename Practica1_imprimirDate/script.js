
var boton=document.getElementById("boton");


const imprimir_Formulario=(e)=>{
    fecha=document.getElementById("date").value;
    console.log(fecha);

}


boton.addEventListener("click", imprimir_Formulario);

