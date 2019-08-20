// import components

// 
// Aca vamos a tener los imports/exports de Atoms / Moleculas. 
// 
// De este file salen los components para el Storybook.


// Una forma

import Button from './sarar/biutton';
import Select from './sarar/biutton';
import Input from './sarar/biutton';
import Form from './sarar/biutton';
import h1 from './sarar/biutton';
import textarea from './sarar/biutton';
import field from './sarar/biutton';

export Button;
export Select;
export Input;
export Form;
export h1;
export textarea;
export field;


// Una forma
export = {
 input
}

import { input } from './public-api'
