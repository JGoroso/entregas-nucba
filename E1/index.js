// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

// 👉 Crear una función que acepte ese array como parámetro.

// Dentro de la función, debemos lograr lo siguiente:
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares".
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares".
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares).
// Los ingredientes impares son: (ingredientes en array impares)."

// const INGREDIENTES = [
//   "harina",
//   "queso",
//   "salsa",
//   "aceitunas",
//   "jamon",
//   "tomate",
//   "oregano",
//   "salame",
//   "roquefort",
//   "huevo",
// ];

// const pizzaFunction = () => {
//   const PARES = [];
//   const IMPARES = [];

//   for (i = 0; i < INGREDIENTES.length; i++) {
//     if (INGREDIENTES[i].length % 2 === 0) {
//       PARES.push(INGREDIENTES[i]);
//     } else IMPARES.push(INGREDIENTES[i]);
//   }
//   return console.log(
//     `Los ingredientes pares son: ${PARES} y Los ingredientes impares son: ${IMPARES}`
//   );
// };

// pizzaFunction();

// CLASES OBJ
// -Crear la clase constructora "Zapatillas". Debe aceptar como parámetros Marca, color y talle.
// -Crear, como mínimo, 5 objetos con esta clase.
// -Crear una función que acepte como parámetro un objeto. Esa función debe imprimir en consola la marca, el color y el talle del objeto que le pasamos.
// -La impresión en consola debe ser friendly para el usuario, no solo los datos sueltos.

// class Zapatillas {
//   constructor(marca, color, talle) {
//     this.primero = marca;
//     this.segundo = color;
//     this.tercero = talle;
//   }
// }

// const zapas = new Zapatillas("Nike", "Blue", "42");
// const zapas2 = new Zapatillas("Adidas", "Brown", "41");
// console.log(zapas2);

// const crearFuncion = (zapas) => {
//   console.log(`La marca de las zapatiilas son ` + zapas.primero);
//   console.log(`El color de las zapatiilas son ` + zapas.segundo);
//   console.log(`El talle de las zapatiilas son ` + zapas.tercero);
// };

// crearFuncion(zapas);
// crearFuncion(zapas2);

// ARRAYS DE OBJETOS EN JAVASCRIPT

///////////////////////////  idnexOF, tolower, toupper
// const string = "   Hola,soy de boca, H me gusta el mate";

// // console.log(string.indexOf("H", 4)); // Trae el indice del texto segun el parametro

// // toLowerCase --> Todo minuscula  toUpperCase() ---> Todo mayuscula

// //////////////////////////////// toISOString
// const fecha = new Date().toISOString(); // toISOString convierte la fecha a un string

// ////////////////////////// Split, reverse, join
// console.log(fecha.split("T")); // El split corta segun el caracter que le indiquemos
// const [solofecha, solohorario] = fecha.split("T"); //Deconstruyo
// console.log(solofecha.split("-").reverse().join("/")); // Muestra
// console.log(solohorario); // Muestro

// //////////////////////////////  replace, replace all
// console.log(solofecha.replaceAll("-", "/")); // replace reemplaza el primer /
// // replaceAll reemplza todos los /

// /////////////////////////////////////  trim, trimend, trimstart
// console.log(string.trim()); // Quita los espacios de adelante y de ATRAS CREO

// //////////////////////////// typeOf devuelve tipo de dato de lo que sea que le pase

// const multiplicar = (num1, num2) => num1 * num2;
// const secondFunction = (num1, num2, multiplicar) => {
//   return multiplicar(num1, num2);
// };

// console.log(multiplicar(4, 3));
// console.log(secondFunction(4, 3, multiplicar));

// CLASE REPASO MARTES 12/04

// CONDICIONALES

// CLASES === plantilla
// DESTRUCTURACION DE OBJETOS ===

class Persona {
  constructor(nombre, edad, mascotas, tieneTrabajo, domicilio) {
    this.nombre = nombre;
    this.edad = edad;
    this.mascotas = mascotas;
    this.tieneTrabajo = tieneTrabajo;
    this.domicilio = domicilio;
  }
}

const persona1 = new Persona({
  nombre: "juan",
  edad: 23,
  mascota: ["perro", "gato"],
  tieneTrabajo: false,
  domicilio: {
    calle: "Siempre viva 123",
    altura: 423,
  },
});

console.log(persona1);


// - Crear una clase Carrito con las propiedades Productos, ImporteTotal, Usuario.
// - Crear una clase Producto con las propiedades Precio, Nombre, ID

// - La clase Carrito debe tener un metodo que le permita agregar Productos a su propiedad Productos (es un array), asi como Tambien eliminarlos. Ademas, cuando agrego o elimino un producto al carrito debe modificarse el importe total (propiedad de Carrito) en base al precio del Producto agregado.




class Carrito {
  constructor(){
    
  }
}