import { getHeroeByIdAsync } from '../../base/09-promesas.js';
import heroes from '../../data/heroes'

describe('Pruebas con promesas',()=>{
    
    test('getHeroeByIdAsync debe retornar un Heroe Async', (done)=>{
        const id=1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            done();
            
        })
    })

    test('getHeroeByIdAsync debe obtener error si el id no existe', (done)=>{
        const id=100;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            // eslint-disable-next-line jest/no-conditional-expect
            expect(heroe).toBe(heroes[id]);
            done();
            
        })
        .catch(error=>{
            // eslint-disable-next-line jest/no-conditional-expect
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    })
})