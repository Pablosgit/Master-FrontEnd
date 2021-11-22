console.log("************** DELIVERABLE 02 *********************");

//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

console.log("%c2. Concat:","color: green");

const arrayOperations2 = ["Azul", "Negro", "Amarillo"];
const arrayConcat = ["Rojo", "Naranja", "Verde"];
const arrayConcat2 = ["Morado", "Marron", "Blanco"];


const concat = (arrayA, ArrayB) => [...arrayA, ...ArrayB]; // Implementation here.

console.log("Resultado:", concat(arrayOperations2, arrayConcat))


// Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

console.log("%c2. Concat(Opcional):","color: green");

const concatOptional = (...ArrayRest) => {
    const arrayCopy = [];
    for (let color of ArrayRest){
        arrayCopy.push(...color);
    }
    return arrayCopy;
}// Implementation here.

console.log("Resultado:", concatOptional(arrayOperations2, arrayConcat, arrayConcat2))


//const concatOptional = (...ArrayRest) => ArrayRest; // Implementation here.
//console.log("Resultado:", concatOptional(...arrayOperations, ...arrayConcat, ...arrayConcat2))

//console.log(arrayOperations.concat(arrayConcat));
