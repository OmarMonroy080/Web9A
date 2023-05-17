
//promesas en js

// las promesas son asincornas por defincion 
import {GetHeroeById}  from './bases/importacion-exportacion'


const GetHeroeByIdAsync  = (id) => {
    
    return new  Promise((resolve, reject ) =>{
        setTimeout( ()=>{ 
            const heroe = GetHeroeById(id);
            if (heroe){
                //cambia el estado a fullfill
                resolve(heroe);
            }
            else{
                reject('El Heroe no se encuentra en la lista');
            }
        }
        ,2000);
    });
}

console.log(GetHeroeById(1));


GetHeroeByIdAsync(10).then(heroe =>{console.log(heroe)}).catch(error => console.log(error));



