'use strict'
//codigo del cuadrado 
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadro miden: ${ladoCuadrado} cm`);
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadro miden: ${perimetroCuadrado} cm`);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El are del cuadro miden: ${areaCuadrado} cm cuadrado`);
console.groupEnd();
//fin del codigo del cuadrado
//##############################
//codigo del triangulo
console.group("Triangulo");
const triangulo = {
    "lado1": 6,
    "lado2": 6,
    "base": 4,
    "altura": 5.5
}
console.log(`Los lados del triangulo miden: \n 
lado 1: ${triangulo.lado1}cm, \n 
lado 2: ${triangulo.lado2}cm \n 
la base mide ${triangulo.base}cm \n
la altura mide ${triangulo.altura}cm`);
const perimetroTri = triangulo.lado1 + triangulo.lado2 + triangulo.base;
const areaTri = (triangulo.base * triangulo.altura) / 2;
console.log(`El perimetro del triangulo es: ${perimetroTri}cm \n 
El area del triangulo es: ${areaTri}cm cuadrado`);
console.groupEnd();
//fin del codigo del triangulo
//##############################
//codigo del circulo
console.group("Circulos");
const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
const perimetro = diametro * pi;
const area = (radio * radio) * pi;
console.log(`Datos del circulo \n
Radio: ${radio} \n
Diametro: ${diametro} \n
Perimetro: ${perimetro} \n
Area: ${area}`);
console.groupEnd();