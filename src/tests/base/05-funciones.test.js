import { getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas de 05-funciones.js',()=>{

    test("getUser debe retornar un objeto",()=>{
        const userTest = {
            uid: 'ABC123',
            username: 'SuperUser2021'
        }

        const user = getUser();
        expect(userTest).toEqual(user);
    })

    test("getUsuarioActivo debe retornar un objeto",()=>{
        
        const nombre = "Pancho Villa";

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:'ABC567',
            username: nombre
        });
    })
})