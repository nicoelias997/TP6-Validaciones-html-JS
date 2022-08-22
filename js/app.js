import Persona from './classPersona.js';
import {cantidadCaracteres, validarAltura, validarDNI, validarEdad} from './helpers.js';

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let dni = document.getElementById("dni");
let genero = document.getElementById("genero");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let anio = document.getElementById("fechaNacimiento");
let formulario = document.getElementById("formGeneraciones");
let alerta = document.querySelector("#msjError");
let btnmostrarDatos = document.querySelector("#mostrarDatos");
let btnmostrarGeneracion = document.querySelector("#mostrarGeneracion");

//aqui voy agregando los eventos
formulario.addEventListener("submit", crearPersona);
nombre.addEventListener('blur', ()=>{cantidadCaracteres(nombre)});
edad.addEventListener('blur',()=>{validarEdad(edad)});
dni.addEventListener('blur',()=>{validarDNI(dni)});
altura.addEventListener('blur',()=>{validarAltura(altura)})

function crearPersona(e) {
  e.preventDefault();
    console.log("tengo que crear la persona");
   // aqui tengo que volver a validar todo
  if(cantidadCaracteres(nombre) &&  validarEdad(edad) && validarDNI(dni) && validarAltura(altura)){
    //si todo esta correcto
    const nuevaPersona = new Persona(
      nombre.value,
      edad.value,
      dni.value,
      genero.value,
      peso.value,
      altura.value,
      anio.value
    );
    console.log(nuevaPersona);
    //reseteo los datos del formulario 
    limpiarFormulario();
   
    // mostramos opciones para la persona creada
    let datosExtras = document.querySelector("#datosExtras");
    datosExtras.className = "container bg-light my-4 rounded-3";
    // agregar el nombre de la persona en la seccion de detalle
    datosExtras.children[0].children[0].innerHTML = `<i class="bi bi-person-badge"></i> Persona: ${nuevaPersona.mostrarNombre}`;
    // opciones para agregar un manejador de eventos en un boton
    btnmostrarDatos.addEventListener("click", () =>
      mostrarDatosPersona(nuevaPersona)
    );
    btnmostrarGeneracion.addEventListener("click", () => {
      let panelDatos = document.querySelector("#detalle");
      panelDatos.innerHTML = nuevaPersona.mostrarGeneracion();
    });
  
  }else{
    alert('Corregir los datos')
  }
}



function mostrarDatosPersona(persona) {
  let panelDatos = document.querySelector("#detalle");
  panelDatos.innerHTML = persona.mostrarDatos();
}


function limpiarFormulario(){
  formGeneraciones.reset(); //limpia los value de todo lo que hay en el form
  console.log(document.getElementsByTagName('input'));
  //hacer un bucle tomar cada input y className='form-control'
}