const persona =  {
    nombre : "Omar",
    apellido : "Monroy",
    edad:22,
    direccion :{
        calle : "10 poniente",
        no : 504,
        colonia :"la libertad",
        municipio:"Puebla",
    },
};
//operadores de propagacion de objetos :)
console.log(persona.apellido);
console.log(persona.direccion.colonia);
const persona2 = {...persona};
persona2.edad = 21;
console.log(persona2.edad);


//tema 2 09-05-2023


