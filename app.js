// 1º Inicializar el proyecto con "npm init -y"
// 2º Instalamos los módulos necesarios de las dependencias que vamos a utilizar. (mysql / expresss / ejs)

// 3º requerimos los modulos necesarios a traves de objetos de dichos modulos-.

let mysql = require('mysql');
let express = require('express');


let app = express();

// 4º configurar un puerto de mi servidor HTTP:

app.listen(3000, function(){
    console.log("Servidor corriendo en la dirección http://www.localhost:3000");
});


// Creamos nuestra primera ruta

app.get("/",function(req,res){
    res.render("index.ejs",{subtitulo:"Hoy es un día de Sol"});
})

// Conectarnos a la Base de Datos
 let datosdeAccesoBD = {host:"sql10.freesqldatabase.com", database:"sql10652647",user:"sql10652647", password:"DgW4wqdb63"};
 let conexion = mysql.createConnection(datosdeAccesoBD);

// otra ruta de usuarios

app.get("/usuarios",function(req,res){
    let cargarusuario = conexion.query("SELECT * FROM usuario",function(error,listado){
        if(error) throw error;
        else{
            res.render("usuarios.ejs",{subtitulo2: "No hay demasiados usuarios",subtitulo3:"vacantes disponibles", listado: listado});
        }
    })
})