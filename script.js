
// Cada que cargues la página aparecerá esto
// alert("Hola mundo");

// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: true,
//     delay: 75,
// });

// typewriter
//     .pauseFor(2500)
//     .typeString('A simple yet powerful native javascript')
//     .pauseFor(300)
//     .deleteChars(10)
//     .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//     .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//     .pauseFor(1000)
//     .start();



let titulo = document.getElementById('titulo');
let typewriter = new Typewriter(titulo, {
    loop: true,
    delay: 75,
});
// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
    .pauseFor(2500)
    .typeString('Diana H. Rendón')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora Frontend JR')
    .pauseFor(1000)
    .start();