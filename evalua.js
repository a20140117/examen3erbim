var nom = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");

alert("Bienvenido "+ nom +" a la pagina de Java Script");

var res1 = prompt("¿En que departamento se encuentra el lago titicaca?\n A: Tacna\n B: Puno\n C: Cusco");

if(res1=="B"){
    res1=1;
 }else{
    res1= 0;
 }

 var res2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\n A: Lima e Ica\n B: Arequipa y Tacna\n C: Piura y Tumbes");

 if(res2=="C"){
    res2=1;
 }else{
    res2= 0;
 }

 var res3 = prompt("Plato típico de la Selva peruana\n A: Tacacho con cecina\n B: Arroz con pollo\n C: Lomo saltado");

 if(res3=="A"){
    res3=1;
 }else{
    res3= 0;
 }

 var total = res1 + res2 + res3;

 document.write("<h1>Cuestionario</h1>");
 document.write("<p>Estos fueron tus resultados</p>");
 document.write("Estudiante: " + nom + "<br>");
 document.write("Obtuviste " + total + " puntos <br>");

 if(total<=1){
    document.write("Vuelve a intentarlo");
 }else{
   document.write("Lo has hecho bien")
 }


