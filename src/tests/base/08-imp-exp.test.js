import {getHeroeById} from '../../base/08-imp-exp'
describe('Pruebas en funciones de Heroes',()=>{
    test('deben retornar un heroe',()=>{
        const id=1;
        const heroes = getHeroeById(id);
    })
})