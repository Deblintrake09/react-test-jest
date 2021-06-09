import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas de PrimeraApp',()=>{

   /* test('debe mostar el mensaje "Hola, Soy Batman!!"',()=>{
        const saludo = "Hola, Soy Batman!!";
        const wrapper = render(<PrimeraApp saludo={saludo}/>)

        expect(wrapper.getByText(saludo)).toBeInTheDocument();
    })*/

    test('debe mostar <PrimeraApp/> correctamente', ()=>{
        const saludo = "Hola, Soy Batman!!";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostarr el subtitulo pasado por props',()=>{ 
        const saludo = "Hola, Soy Batman!!";
        const subtitulo = "Oscuridad! Sin Padres!"
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>)

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });
})