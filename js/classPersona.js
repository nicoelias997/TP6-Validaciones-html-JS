export default class Persona {
    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo) {
        return `<ul>
        <li> Generaci贸n: ${generacion}</li>
        <li> Marco temporal:  ${marcoTemporal} </li>
        <li> Circunstancia hist贸rica:  ${historia}</li>
        <li> Rasgo caracter铆stico: ${rasgo} </li>
      </ul>
      `;
      }
      mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
          return this.mostrarDetalleGeneracion(
            "Silent Generation",
            "1930-1948",
            "Conflictos b茅licos",
            "Austeridad 馃槓"
          );
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
          return this.mostrarDetalleGeneracion(
            "baby Boom",
            "1949-1968",
            "Paz y explosi贸n demogr谩fica",
            "Ambicion 馃"
          );
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
          return this.mostrarDetalleGeneracion(
            "Generaci贸n X",
            "1969 - 1980",
            "Crisis del 73 y transici贸n espa帽ola",
            "Obsesi贸n por el exito 馃槑"
          );
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
          return this.mostrarDetalleGeneracion(
            "Generaci贸n Y (Millenials)",
            "1981 - 1993",
            "Inicio de la digitalizaci贸n",
            "Frustraci贸n 馃槙"
          );
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento < 2010) {
          return this.mostrarDetalleGeneracion(
            "Generaci贸n Z (Centennials)",
            "1994 - 2010",
            "Expansi贸n masiva de internet",
            "Irreverencia 馃構"
          );
        } else if (this.anioNacimiento >= 2011) {
          return this.mostrarDetalleGeneracion(
            "Generaci贸n Alfa",
            "2011 - Actualidad",
            "Nativos Digitales al 100%",
            "Son predilectos 馃槣"
          );
        } else {
          return '<p>No se posee datos para la fecha seleccionada</p>';
        }
      }
      
    esMayorDeEdad(){
        if(this.edad >= 18 ){
            return (`${this.nombre} es mayor de edad.<br>`);
         }
    }
    mostrarDatos(){
        return (`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Genero:  ${(this.sexo ==='H')?'Hombre':'Mujer'}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>A帽o de nacimiento: ${this.anioNacimiento}</li>
        <li>DNI Aleatorio generado: ${this.dni}</li>
        </ul>
        `);
    }
     generaDNI(){
        let numRandom=Math.round(Math.random()*(99999999-10000000)+parseInt(1));
        this.nuevoDni=numRandom;
    }
  
    get mostrarNombre(){
        return this.nombre;
      }
  }
  
// export let prueba = 'test desde class persona'

// function saludar(){
//     console.log('funcion que saluda')
// }