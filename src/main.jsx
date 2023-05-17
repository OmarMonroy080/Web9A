
//promesas en js

// las promesas son asincornas por defincion 
import {GetHeroeById}  from './bases/importacion-exportacion'


const GetHeroeByIdAsync  = async (id) => {
        setTimeout( ()=>{ 
            try{
                const heroe =  GetHeroeById(id);
                console.log(heroe);
            }
            catch{
                console.log("No se encuentra en la lista")
            }
        }
        ,2000);
}

GetHeroeByIdAsync(3);