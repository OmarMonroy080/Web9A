//desestructuración

const vehiculo ={
    anhio:2023,
    id: 123,
    marca:'nissan',
    modelo:'sentra',
};

console.log(vehiculo);
const modelo ='march';
const { modelo:modelo2,id, anhio}= vehiculo;
console.log(modelo2,id,anhio,modelo);

const getModelo = (vehiculo)=>{
 //return vehiculo.modelo;   
 const{modelo}=vehiculo;
 return modelo;
};


console.log('--------------------1');
console.log(getModelo(vehiculo));
const user = {
    nickname :'elpepe',
    name:'benies',
    pass :'aasadasd'
};
const _useContex = ({niKname,name,pass})=>{
    return {
        nombre :name,
        usuario: niKname,
        contraseña: pass,
        llaves:{
            publica:'añlksjdlajksd',
            privada:'123456'
        },
    };
};


console.log(_useContex(user));

const{llaves} =_useContex(user);

const{publica,privada}= llaves;

console.log(publica,privada);


