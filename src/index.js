import React from "react";
import ReactDOM from "react-dom";
import Saludo from './exampleComponent.jsx';
import 'bootstrap'
import './scss/app.scss';

ReactDOM.render(
    <Saludo nombre="SuperMeat" like> Boy (Best Videogame) </Saludo>,
    document.getElementById('mensaje')
);