console.log("************** DELIVERABLE 03 *********************");

console.log("%c3. Clone Merge:","color: green");

const source = { name: "Maria", surname: "Ibañez", country: "SPA" };
const target = { name: "Luisa", age: 31, married: true };

//Clone: Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
    return {...source};
}

console.log("Resultado Clone:", clone(source))


// Merge: Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source,target) {
    return {...target, ...source };
}

console.log("Resultado Merge:", merge(source, target));