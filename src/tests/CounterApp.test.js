import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas del componente <CounterApp/>', ()=>{

    let wrapper = shallow(<CounterApp/>);
    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>);
    })
    
    test('debe mostrar el componente de manera correcta',()=>{
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe mostrar un valor por defecto de 100 en el value', ()=>{
        const wrapper = shallow(<CounterApp value={100}/>)
        const valueTest =wrapper.find('p').text().trim();
        expect(valueTest).toBe("100");
    })

    test('debe de incrementar con boton +1', ()=>{
        wrapper.find('button').at(0).simulate('click');
        const valueText =wrapper.find('p').text().trim();

        expect(valueText).toBe('11');
    })

    test('debe de disminuir el valor del contador con boton -1', ()=>{
        wrapper.find('button').at(2).simulate('click');
        const valueText =wrapper.find('p').text().trim();

        expect(valueText).toBe('9');
    })

    test('debe colocar el valor por defecto tras presionar el boton reset', ()=>{
        const wrapper = shallow(<CounterApp value={105}/>)
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const valueText =wrapper.find('p').text().trim();
        
        expect(valueText).toBe('105');

    })
});