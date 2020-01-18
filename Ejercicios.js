//SUMA
/* Escribe una función que acepte como parámetro un arreglo de enteros 
y regrese la suma de todos los números en el. */
const arre = [];
function sumarreglo(arre){
        let total = 0;  
        for (suma = 0; suma < arre.length; suma++){   
        total = total + arre[suma];
        }
        return total;
}
console.log ("La suma del arreglo es: ", sumarreglo([10,1]) );

//REVERSE
/* Escribe una función que acepte como parámetro un arreglo de enteros e 
imprima los elementos en el orden al revés. */
function orden(enteros){
    const copy = [...enteros];
    for (let i=0; i < enteros.length; i++){
        console.log(copy.pop());
    }
}
orden([10,5,3,1]);
//Ahora con los indices al reves
function reverse(array){
    for (let i = array.length - 1; i >=0; i--){ // i es igual al tamaño menos uno y nos da el ultimo de nuestro arreglo
        console.log(array[i]);
    }
}
reverse([10,5,3,1]);// en este caso se utilizo array.legth -1 por que cuenta el size del arreglo -1 ya que la cuenta empiza de 0

//MAX
// Escribe una función que acepte como parámetro un arreglo de enteros y regrese el número mayor del arreglo.
function mayor(numeros) {
    let x = numeros[0];
    for (let i=0; i<numeros.length; i++) {
        if (x < numeros[i]) {
            x = numeros[i];
       }
    }
    console.log(x);
}
mayor([4,6,8,15]);

//MIN
// Escribe una función que acepte como parámetro un arreglo de enteros y regrese el número menor del arreglo.
function menor(nums) {
    let x = nums[0];
    for (let i=0; i<nums.length; i++) {
        if (x > nums[i]) {
            x = nums[i];
       }
    }
    console.log(x);
}
menor([4,6,56,15]);

//CONCATENAR
//Escribe una función que acepte como parámetro un arreglo de cadenas de texto y regrese todos los textos concatenados.
function concatena(palabras){
    let frase = " ";
    for (i = 0; i < palabras.length; i++){   
    frase = frase + " " + palabras[i];
    }
    console.log(frase);
}
concatena(['hola','ya','casi','es','hora', '?']);

//PROMEDIO
//Escribe una función que acepte como parámetro un arreglo de enteros y regrese el promedio de los números.
function promedio(content){
    let resultado = 0;
    let suma = 0;
    for(let i=0; i<content.length; i++){
        suma = suma + content[i];
        resultado = suma / content.length; 
    }
    console.log(resultado);    
}
promedio([4,6,7,0,]);

//UNION
//Escribe una función que acepte como parámetro dos arreglos de enteros y regrese la unión.
function union (arre1,arre2){
    juntos = [...arre1, ...arre2]; //los tres puntos van en cada elemento
    console.log(juntos);
}
union([2,4,7],[789]);

//INTERSESIÓN
//Escribe una función que acepte como parámetro dos arreglos de enteros y regrese los elementos que tienen en común.
function comun (caja1,caja2,caja3) {
    for (let i=0;i<caja1.length;i++){
        for (let u=0;u<caja2.length;u++){
            if (caja1[i]==caja2[u]){
                let elcomun = caja2[u];
                console.log(elcomun);
            }
        }
    }
}

comun([2,4,3],[5,2]);

//REPLACE
/*Escribe una función que acepte como parámetro un arreglo de enteros y
regrese otro arreglo reemplazando todos los 0 por -1. */
function remplazo(arreplazo){
    for(let i=0; i<arreplazo.length;i++){
        if (arreplazo[i]==0){
            let u = i;
            arreplazo[u] = -1;
        }
    }
    console.log(arreplazo);
}
remplazo([7,0,2,8]);

//REPETIDO
/*Escribe una función que acepte como parámetro un arreglo de enteros y regrese el primer entero repetido, 
sino existe -1. */
function repetido(a){
    let aux = [];
    for(let i = 0; i < a.length; i++){
        aux.push(a[i]);
        }
    for(let j = 0; j < aux.length; j++){
        if (a[i]===aux[j]){
            console.log(aux[j]);
        }
    }
}
repetido([2,3,7,6,3]);