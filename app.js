const Ejercito = require("./modelos/Ejercito");
const batallas = require("./funciones/batallas");

console.log("log con la informacion de los ejercitos creados:");
const Ingles = new Ejercito("Ingleses");
console.log(Ingles);
const Ingles2  = new Ejercito('Ingleses')
console.log(Ingles2);
const Chinos = new Ejercito('Chinos');
console.log(Chinos);
const Bizantinos = new Ejercito('Bizantinos')
console.log(Bizantinos);

console.log("----log de la fuerza de cada ejercito creado:");
console.log("Ingles: "+Ingles.fuerza);
console.log("Chinos: "+Chinos.fuerza);
console.log("Bizantinos: "+Bizantinos.fuerza);

console.log("----log despues de entrenar ejercito Ingles:");
console.log("fuerza ejercito:"+Ingles.fuerza)
console.log("Oro ejercito: "+Ingles.oro)
console.log(Ingles.entrenaUnaUnidad("Arquero"))
console.log("fuerza ejercito:"+Ingles.fuerza)
console.log("Oro ejercito: "+Ingles.oro)

console.log("----log despues de transformar unidad arquero en ejercito Ingles:");
console.log("Cantidad Arqueros antes de transformar: "+Ingles.unidadesDeClase("Arquero").length);
console.log("Cantidad Cabaalleros antes de transformar: "+Ingles.unidadesDeClase("Caballero").length);
console.log(Ingles.transformaUnaUnidad("Arquero"));
console.log("Cantidad Arqueros despues de transformar: "+Ingles.unidadesDeClase("Arquero").length);
console.log("Cantidad Cabaalleros despues de transformar: "+Ingles.unidadesDeClase("Caballero").length);
console.log("fuerza ejercito:"+Ingles.fuerza);
console.log("Oro ejercito: "+Ingles.oro);


batallas.batallar(Ingles2, Chinos)
console.log("----log antes de las batallas entre ejercito ingles2 y chino");
console.log("log tropas Inglesas antes de la batalla:");
console.log("Cantidad Piqueros Ingleses antes de batalla: "+Ingles2.unidadesDeClase("Piquero").length);
console.log("Cantidad Arqueros Ingleses antes de batalla: "+Ingles2.unidadesDeClase("Arquero").length);
console.log("Cantidad Caballeros Ingleses antes de batalla: "+Ingles2.unidadesDeClase("Caballero").length);
console.log("fuerza ejercito Ingles:"+Ingles2.fuerza);
console.log("Oro ejercito Ingles: "+Ingles2.oro);
console.log("log tropas Chinas antes de la batalla:");
console.log("Cantidad Piqueros Chinos antes de batalla: "+Chinos.unidadesDeClase("Piquero").length);
console.log("Cantidad Arqueros Chinos antes de batalla: "+Chinos.unidadesDeClase("Arquero").length);
console.log("Cantidad Caballeros Chinos antes de batalla: "+Chinos.unidadesDeClase("Caballero").length);
console.log("fuerza ejercito Chino:"+Chinos.fuerza);
console.log("Oro ejercito Chino: "+Chinos.oro);
console.log("----log despues de las batallas entre ejercito ingles2 y chino, el ejercito ingles deberia perder");
console.log("log tropas Inglesas:");
console.log("Cantidad Piqueros Ingleses despues de batalla: "+Ingles2.unidadesDeClase("Piquero").length);
console.log("Cantidad Arqueros Ingleses despues de batalla: "+Ingles2.unidadesDeClase("Arquero").length);
console.log("Cantidad Caballeros Ingleses despues de batalla: "+Ingles2.unidadesDeClase("Caballero").length);
console.log("fuerza ejercito Ingles:"+Ingles2.fuerza);
console.log("Oro ejercito Ingles: "+Ingles2.oro);
console.log("log tropas Chinas:");
console.log("Cantidad Piqueros Chinos despues de batalla: "+Chinos.unidadesDeClase("Piquero").length);
console.log("Cantidad Arqueros Chinos despues de batalla: "+Chinos.unidadesDeClase("Arquero").length);
console.log("Cantidad Caballeros Chinos despues de batalla: "+Chinos.unidadesDeClase("Caballero").length);
console.log("fuerza ejercito Chino:"+Chinos.fuerza);
console.log("Oro ejercito Chino: "+Chinos.oro);

