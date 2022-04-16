var usuario = prompt("Cual es tu peso?");
var planeta = parseInt(prompt("Elige tu planeta.\n1 es Marte, 2 es Jupiter, 3 es Venus"));
var peso = parseInt(usuario);
var ubicacion;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_venus = 8.87;
var incorrecto = "<p style=color:red;>La opcion que escogiste no es para nada valida</p>";
var peso_final;
if (planeta == 1)
{
    peso_final = peso * g_marte / g_tierra;
    ubicacion = "Marte";
    peso_final = parseInt(peso_final);
    document.write("Tu peso en " + ubicacion + " son <strong>" + peso_final + " Kilos </strong>");
}
else if (planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra;
    ubicacion = "Jupiter";
    peso_final = parseInt(peso_final);
    document.write("Tu peso en " + ubicacion + " son <strong>" + peso_final + " Kilos </strong>");
}
else if (planeta == 3)
{
    peso_final = peso * g_venus / g_tierra;
    ubicacion = "Venus";
    peso_final = parseInt(peso_final);
    document.write("Tu peso en " + ubicacion + " son <strong>" + peso_final + " Kilos </strong>");
}
else
{
    peso_final = 0;
    ubicacion = "el universo";
    alert("No es una opcion valida");
    peso_final = parseInt(peso_final);
    document.write(incorrecto);
}