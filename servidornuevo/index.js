const express = require("express");
const app = express();
const PORT = 3000;

require("./router/api")(app);
require("./router/views")(app);

function init(){
    console.log('Iniciando instancia de Express ...');
    app.listen(PORT, ()=>{
        console.log('El servidor está activo');
    });
}
init();
