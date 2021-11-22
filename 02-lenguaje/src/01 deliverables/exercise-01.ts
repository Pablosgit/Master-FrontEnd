console.log("************** DELIVERABLE 01 *********************");

console.log("%c1. Array operations:","color: green");


const arrayOperations = ["Azul", "Negro", "Amarillo"];

console.log("Array:", arrayOperations);


// "HEAD: Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring."


const head = (array) => {
    const [first] = array;
    return first;
}; // Implementation here.

console.log("Resultado HEAD:", head(arrayOperations));



// "TAIL: Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator."

const tail = ([,...arrayRest]) => arrayRest; // Implementation here.

console.log("Resultado TAIL:", tail(arrayOperations));



// "Init: Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype."

const init = (arrayPrototype) => {
    const newArray =  arrayPrototype.slice();
    newArray.pop();
    return newArray;
 } // Implementation here.

console.log("Resultado INIT:", init(arrayOperations));



// LAST: Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arrayLast) => arrayLast[arrayLast.length-1]; // Implementation here.

console.log("Resultado LAST:", last(arrayOperations));