import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';

import './index.css';


const div = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo='Hola, joven padawan!'/>, div);
ReactDOM.render(<CounterApp value={5}/>, div);