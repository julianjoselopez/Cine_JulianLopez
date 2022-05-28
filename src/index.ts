/*
Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada
*/


btnEnviar.addEventListener("click", () => {
let cantidadSillas: number = Number(prompt(`Ingrese la cantidad de butacas: `));
let cine: Boolean[] = new Array(cantidadSillas);
let indice: number;
let nroButaca: number;
for (indice = 0; indice < cantidadSillas; indice++) {
  nroButaca = indice + 1;
  cine[indice] = Boolean(
    prompt("¿la butaca " + nroButaca +" esta ocupada? vacio =no "));
}

let vacias: number = 0;
let indice: number;
for (indice = 0; indice < cantidadSillas; indice++) {
  if (cine[indice] == false) {
    vacias++;
  } 
}
console.log(
  `Hay ${vacias} sillas vacias`
);
