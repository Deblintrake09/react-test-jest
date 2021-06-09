import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes',()=>{
    
    test('deben retornar un heroe por id',()=>{
        const id=1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h=>h.id===id);

        expect(heroe).toEqual(heroeData);
    })

    test('deben retornar un undefined si heroe no existe',()=>{
        const id=100;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
    })

    test('deben retornar un arreglo con los heroes de DC',()=>{
        const owner = 'DC'
        const heroesDC = getHeroesByOwner(owner);
        const heroesDCData = heroes.filter(h=>h.owner===owner);

        expect(heroesDC).toEqual(heroesDCData);
    })

    test('deben retornar un arreglo con los heroes de Marvel, con longitud 2',()=>{
        const owner = 'Marvel'
        const heroesMarvel = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h=>h.owner===owner);

        expect(heroesMarvel.length).toBe(heroesData.length);
    })

    test('deben retornar un un array vacío [] si una editorial no existe',()=>{
        const owner = 'Vertigo'
        const heroesVertigo = getHeroesByOwner(owner);

        expect(heroesVertigo).toEqual([]);
    })
})