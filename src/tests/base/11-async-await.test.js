import {getImagen} from '../../base/11-async-await'

describe('Pruebas con async-await y Fetch', ()=>{

    test('debe retornar una url con un gif', async ()=>{
        
        const url = await getImagen();
        expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
    });
})