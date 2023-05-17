//desestructuracion de arreglos

const personajes = ['bob esponja','goku','vegetta'];

console.log(personajes[1]);

const [,p1]= personajes;
console.log(p1)

const arreglo = ()=>{
    return[
        'asdasd',
        1
    ]
}

const [letras,numero] = arreglo();

console.log(letras,numero);

const _useState =(valor) => {
    return [valor,()=>'esta es una funcion'];
}

console.log(_useState('omar'));


//ejercicio desestrucutura el arreglo que proviene de invocar a la funcion _useState()

//1.el valor desestructuralo como "nombre"
//2. la funcion desestructurala como "getMensaje"



const [nombre,getMensaje] = _useState('nombre');

console.log(nombre,getMensaje());




