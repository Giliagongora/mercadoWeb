// Creación de servidor con express
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Ruta para test: 200
app.get("/saludo", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Definir Handlebars como motor de plantillas
app.set("view engine", "handlebars");

// Configuración del motor de plantillas
app.engine(
    // Define la extensión que usaremos
  "handlebars", exphbs.engine({
    // Extensiones de los archivos de plantillas
    extname: ".handlebars",
    // Plantilla principal
    defaultLayout: "main",
    // Ruta del directorio donde tendremos nuestras vistas
    layoutsDir: __dirname + "/views/",
    // Ruta del directorio donde tendremos nuestros parciales
    partialsDir: __dirname + "/views/partials",
  })
);

// Definición de rutas estáticas para CSS y JavaScript de Bootstrap y jQuery
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
// Definir la ruta de los archivos estáticos (para imágenes)
app.use(express.static(__dirname + '/img'));

// Creación de ruta raíz del servidor, por defecto buscará main.handlebars
// app.get("/", function (req, res)  {
//   res.render("main");
// });

// Arreglo para iterar 
// Endpoint para renderizar la vista que contiene el partial
app.get('/', function (req, res)  {
  // en el metodo render como argumentos el main y el objeto cardData 
  res.render('main', {
    layout: 'main',
    producto: ["Banana", "Cebollas", "Lechuga", "Papas", "Pimenton", "Tomate"]
  //   productos: [
  //   {
  //     nombre: 'Banana',
  //     img: '/banana.png',
  //     descripcion: 'Banana'
  //   },{
  //     nombre: 'Cebollas',
  //     img: '/cebollas.png',
  //     descripcion: 'Cebollas'
  //   },{
  //     nombre: 'Pimentón',
  //     img: '/pimenton.png',
  //     descripcion: 'Pimentón'
  //   },{
  //     nombre: 'Papas',
  //     imagen: '/papas.png',
  //     descripcion: 'Papas'
  //   },{
  //     nombre: 'Lechuga',
  //     img: '/lechuga.png',
  //     descripcion: 'Lechuga'
  //   },{
  //     nombre: 'Tomate',
  //     img: '/tomate.png',
  //     descripcion: 'Tomate'
  //   }
  // ]
 
});

});



// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});




