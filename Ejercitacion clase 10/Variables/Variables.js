var nombre = "Programación " + "Fácil,";
var saludo = "Les doy la bienvenida a ";
var agregado = " espero que lo disfruten"
var fraseCompleta = saludo + nombre + agregado;

console.log(fraseCompleta);

var frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";

console.log(frase);

var numeroString1 = "10";
var numeroString2 = "20";
var numeroString3 = "30";
var espacio = " "

var concatenaNumeros = numeroString1 + espacio + numeroString2 + espacio + numeroString3;

console.log(concatenaNumeros);

var edad = prompt("Que edad tenes?");
var nombrePrompt = prompt("Como te llamas?");
console.log(edad + espacio + nombrePrompt);

var genero = prompt("Sos hombre o mujer? En minusculas por favor");

if (edad >= 18 && genero == "hombre") {
    window.alert("Pasa tranquilo maestro");
} else if (edad < 18 && genero == "hombre") { alert("Solo mayores de edad, no pasas"); }
else if (edad >= 20 && genero == "mujer") {
    alert("Pasa tranquila reina");
} else if (edad < 20 && genero == "mujer") { alert("No tenes la edad, no pasas"); }
else { alert("Dije minusculas crack"); }

