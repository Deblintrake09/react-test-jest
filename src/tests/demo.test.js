describe ('Pruebas dentro del archivo demo.test.js', ()=>{

    test('Deben ser iguales los string', () => {
        
        //1.- inicialización
        const mensaje ='Hola Mundo';

        //2.- estímulo
        const mensaje2 = "Hola Mundo!";
        
        //3.- Controlamos comportamiento
        expect(mensaje).toBe(mensaje2);
        expect(mensaje).toBe("Hola Mundo");
    });
});