import express from 'express';
const app = express();
const PORT = 3000;
//import './routes/api';
//import './routes/views';

function init(){
    console.log('Iniciando instancia de Express ...');
    app.listen(PORT, ()=>{
        console.log('El servidor está activo');
    });
}
init();
