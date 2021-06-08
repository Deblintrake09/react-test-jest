import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas de 02-template-string.js',()=>{

    test('getSaludo debe retornar Hola Andrés',()=>{

        const nombre = "Andrés";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
    })

    test('getSaludo debe retornar Hola Carlos si no hay argumento',()=>{


        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Carlos`);
    })
})