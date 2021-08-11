//import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/chistes-page";
//import { init } from "./js/usuarios-page";
// obtenerChiste().then( console.log );
// obtenerUsuarios().then( console.log );
// init();



// CRUD

import * as CRUD from './js/crud-provider';


// CRUD.getUsuario( 2 ).then( console.log );

// CRUD.crearUsuario({
//     name: 'Luis',
//     job: 'Carpintero'
// }).then( console.log );


// CRUD.actualizarUsuario( 1, {
//     name: 'Luis',
//     job: 'Developer'
// }).then( console.log );

CRUD.borrarUsuario( 1 ).then( console.log );

