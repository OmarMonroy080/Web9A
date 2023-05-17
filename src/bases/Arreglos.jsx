//arreglos en js
const arreglo = new Array();
arreglo[1] = 25;
arreglo.push(100);
console.log(arreglo);
const arreglo2 = [...arreglo];
arreglo2.push(200);
console.log(arreglo2);

const arreglo3 = [...arreglo,1,2,3];
console.log(arreglo3);

const arreglo4 = arreglo.map(function(x){ return x*2;});
console.log(arreglo4);