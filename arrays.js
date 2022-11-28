let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//push --> Agrega un elemento a la derecha del array
array.push('derecha');
console.log(array);



//pop --> Elimina un elemento a la derecha del array
array.pop();
console.log(array)



//unshift  --> Agrega un elemento a la izquierda del array
array.unshift('izquierda');
console.log(array);



//shift  --> Elimina un elemento a la izquierda del array
array.shift();
console.log(array);



//splice --> Hace un corte eliminando desde el índice inicial hasta el índice final, siendo todos inclusivos
console.log(array);
array.splice(6, 8);
console.log(array);
//Si agrego un tercer elemento al splice, este se agrega al array
array.splice(6, 8, 9);
console.log(array);



//slice --> Hace una copia del array desde el índice inicial hasta el índice final, sin ser inclusivo el último
console.log(array);
let array2 = array.slice(0, 3)
console.log(array2);
console.log(array);



//concat --> Concatena dos arrays
let arrayUno = ['soy', 'programador'];
let arrayDos = ['y', 'trader'];
let arrayFinal = arrayUno.concat(arrayDos);
console.log(arrayFinal);



//indexOf --> Consulta el índice de un elemento determinado
console.log(array);
console.log(array.indexOf( 5 ));
console.log(array.indexOf( 10 ));



//includes --> Responde con booleano si existe un elemento en el array
console.log(arrayUno);
console.log(arrayUno.includes('soy'));



//find --> Busca un ítem en un array de objetos, permite almacenar el resultado en una variable
let arrayObject = [
    {id: 1, name: 'Carlos'},
    {id: 2, name: 'Mario'},
    {id: 3, name: 'Yo'}
];
let contenedor = arrayObject.find(item => item.id === 3);
console.log(contenedor);
let contenedor1 = arrayObject.find(item => item.id === 4);
console.log(contenedor1)



//findIndex --> Obtiene el índice de un objeto buscado en un array
let indice = arrayObject.findIndex(index => index.name === 'Mario');
console.log(indice);



//filter --> Crea un nuevo array con los elementos filtrados que cumplan una condición dada
let filter = arrayObject.filter(index => index.name === 'Mario');
console.log(filter);
let filter2 = arrayObject.filter(index => index.id === 1);
console.log(filter2);



//forEach --> Permite iterar cada uno de los elementos de un array para realizar diversas operaciones con ellos
let arrayForEach = [];
array.forEach(item => arrayForEach.push(item * 10));
console.log(arrayForEach);



//map --> Igual que el forEach con la diferencia de que permite guardar el reultado en una variable
console.log(array);
let map = array.map(item => (item * 10));
console.log(map);



//sort --> Ordena ascendentemente los elementos de un array
let arraySort = [5, 10, 6, 7, 9, 4, 2, 1, 6];
arraySort.sort();
console.log(arraySort);
arraySort.sort((a, b) => a -b);
console.log(arraySort);



//reverce --> Invierte el orden de los elementos de un array
array.reverse();
console.log(array);



//split --> Divide un objeto de tipo String en un array de cadenas
let string = 'amor';
let stringDos = string.split('');
console.log(stringDos);
stringDos = string.split('m');
console.log(stringDos);



//join --> Une los elementos de una matríz en un cadena, no cambia el array
console.log(arrayUno);
let join = arrayUno.join('-');
console.log(join);
console.log(arrayUno);



//reduce --> Reduce a un solo valor lo contenido dentro de un array. 
//Recibe dos parámetros, la función a realizar (acumulador, index) => acumulador + index y el acumulador (0)
//A su vez, la función a realizar tiene dos párametros, el 'acumulador' y el 'indice'
console.log(array);
let reduce = array.reduce((acumulador, index) => acumulador + index, 0);
console.log(reduce);


//flat --> Crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
var arr1 = [1, 2, [3, 4]];
arr1.flat();
console.log(arr1)

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
console.log(arr2)

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
console.log(arr3)