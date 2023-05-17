//funciones 

function messaje(){
    return  'hola mundo!!! ';
}
//messaje = 5;
console.log(messaje);

const mensaje = function(cadena){
    return cadena;
}

console.log(mensaje);

//funcion flecha

const mensaje1 = (cadena)=>{
    return cadena;
}
console.log(mensaje1);

const mensajes = ()=>({
    id:1, nick: 'superAdmin',
})
console.log("-------------------");
console.log(mensajes);
