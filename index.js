
/* ------ Cambio de color el fondo ------- */
let body = document.getElementById("body");
body.className = "fondo";






/* -------- Clase constructora ---------- */
class Informacion{
    constructor(calculo, nombre2, numero){
      this.edad = calculo;
      this.nombre = nombre2;
      this.numero = numero;
    }
  }


/*---- Use el filter para los precios de los boletos ----- */
const boletos = [
    {id: 1, nombre: "boleto 1", precio: 3000},
    {id: 2, nombre: "boleto 2", precio: 2500},
    {id: 3, nombre: "boleto 3", precio: 550},
    {id: 4, nombre: "boleto 4", precio: 400},
];

let arreglo1 = document.getElementById("arreglo1");
let nombre = parseInt(prompt("Ingresar precios minimos, Los precios son: $3000, $2500, $550, $400"));

let boletos2 = boletos.filter(item => item.precio > 300);

/* ---- Aparece en la consola ----- */
console.log(`Precio ingresado: $${nombre}`);
console.log(boletos2);

                      

/* ------ Creo las tarjetas para interactuar con el HTML ----- */
for (const producto of boletos2){
    let div = document.createElement("div");
    arreglo1.className = "linea";
    div.className = "tarjeta-arreglo";
    div.innerHTML = `<p> ID: ${producto.id}
                        Producto: ${producto.nombre}
                        Precio: ${producto.precio}</p>`;

    arreglo1.append(div);
};
/*----------------------------------------------------  */

  
/* ------- Array ------- */
  const array = ["Gracias", "precio boleto 0: $170"];
  
  
/* ------ Proceso ------- */
  for(let i = 0; i < 1; i++){  
   let edad = prompt("Ingrese su año de nacimiento");
   let nombre2 = prompt("Ingrese su nombre para el sorteo");
   let numero = prompt("Numeros disponibles: 23, 03, 45, 06, 84, 99.");

  /* Calculo edad */
   const añoResta = (a,b) => a - b;
    
    
   let año = 2022;
   
   let calculo = añoResta(año, edad);
/* ----------------------------- */





/* ------ Agrego la tarjeta en el HTML de los datos --------- */
   let contenedor1 = document.getElementById("contenedor1");
   contenedor1.className = "tarjeta-1";{
    contenedor1.innerHTML = `<p>Numero ${numero} ingresado, Nombre: ${nombre2}, Edad: ${calculo}<p/>`;  
   }

/* --------------------------------------------------------------- */




    let obj = new Informacion(calculo, nombre2, numero);
  
    array.push(obj);
    
   console.log(array);
/* ----- Fin del Proceso ------ */
  
  
  
  
/* ----- Elimino solo el "Gracias" con Splice ----- */
  const eliminar = (arr) => {
      let posicion = array.indexOf(arr);
    
      if(posicion != -1){
        array.splice(posicion, 1);
      }
    
    }
    
    eliminar("Gracias");

console.log(array);

/* ------ Uní este array2 al final -------- */

  const array2 = ["Mucha suerte para el sorteo!"];
  const union = array.concat(array2);
  console.log(union);
  
  }
  



