//importacion de recursos
import heroes,{companies} from '../data/Heroes'


const GetHeroeById = (id)=>{
    return heroes.find((heroe) => heroe.id == id);
};

export{
    GetHeroeById,
}