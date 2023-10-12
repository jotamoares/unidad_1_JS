/*ingresar nombre y apellido*/
var nombre = prompt("Ingrese el nombre del usuario")
var apellido = prompt("Ingrese el apellido del  usuario")
var nombre_completo = nombre + " " + apellido
alert("Tu nombre completo es: " + nombre_completo);


/*promedio de notas*/
var nota1 = parseFloat(prompt("Ingrese la nota del 1er examen"));
var nota2 = parseFloat(prompt("Ingrese la nota del 2do examen"));
var nota3 = parseFloat(prompt("Ingrese la nota del 3er examen"));
var promedio = ((nota1 + nota2 + nota3) / 3);
alert("el promedio de las tres notas es: " + promedio);


/*perímetro del triángulo*/
var lado1 = parseFloat(prompt("Ingrese el largo del lado 1 del triángulo (en cm)"));
var lado2 = parseFloat(prompt("Ingrese el largo del lado 2 del triángulo (en cm)"));
var lado3 = parseFloat(prompt("Ingrese el largo del lado 3 del triángulo (en cm)"));

var perimetro_triangulo = (lado1 + lado2 + lado3);
alert("el perímetro del triángulo es: " + perimetro_triangulo);


/*cálculo del perímetro y área de un cuadrado*/
var lado_c = parseFloat(prompt("Ingrese el largo del lado (en cm)"));
var perimetro_cuadrado = ((lado_c) * 4);
var area_cuadrado = (lado_c * lado_c);
alert("el perímetro del cuadrado es: " + perimetro_cuadrado + " y su área es: " + area_cuadrado);

/*cálculo del perímetro y área de un rectángulo*/
var base_c = parseFloat(prompt("Ingrese el largo de la base del rectángulo (en cm) "));
var altura_c = parseFloat(prompt("Ingrese el largo de la altura del rectángulo (en cm) "));
var perimetro_rectangulo = ((base_c + altura_c) * 2);
var area_rectangulo = (base_c * altura_c);
alert("el perímetro del rectángulo es: " + perimetro_rectangulo + " y su área es: " + area_rectangulo);

/*cálculo del resto de una división*/
var numerador = parseFloat(prompt("Ingrese el número a dividir"));
var divisor = parseFloat(prompt("Ingrese el divisor"));
var resto = numerador % divisor;
alert("El resto de la división entre " + numerador + " y " + divisor + " es " + resto);
alert(" y el resultado de la división es " + numerador / divisor)


/*Bienvenida al usuario*/
alert("Bienvenido: " + nombre_completo);

/*Cálculo del área y perímetro de un círculo*/

var radio = parseFloat(prompt("Ingrese el radio del círculo"));
alert("El área del círculo es: " + (2 * 3.1416 * radio * radio));
alert("El perímetro del círculo es: " + (2 * 3.1416 * radio));







