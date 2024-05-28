/**
 * Crear una función llamada same, que recibe 2 arreglos como argumento, 
 * la función debe verificar que cada valor en el primer arreglo tiene su correspondiente valor al cuadrado en el segundo arreglo, 
 * debe retornar false si no cumple y true si cumple
 * 
 * ejemplo same ([1, 2, 3], [4, 1, 9]) // Retorna true
 * same ([1, 2, 1], [4, 4, 1]) //  Retorna false porque cada valor necesita su propia pareja
 * 
 * La dificultad del ejercicio no recide en resolverlo sin mas, sino en resolverlo con un Time complexity no superior a O(n)
 */

const same = (arrOne: number[], arrTwo: number[]) => {
    console.time('same execution')
    return arrOne.every(element => arrTwo.indexOf(element**2) > -1 ? arrTwo.splice(arrTwo.indexOf(element**2), 1) : false)
}

console.log("Array 1: ", same([1, 2, 3], [4, 1, 9]))
console.timeEnd('same execution')

console.log("Array 2: ", same([1, 2, 1], [4, 4, 1]))
console.timeEnd('same execution')

console.log("Array 3: ", same([1, 2, 2, 3], [6, 4, 1, 4]))
console.timeEnd('same execution')

console.log("Array 4: ", same([1, 8, 6, 3, 6, 10, 1], [100, 1, 1, 64, 36, 9, 36]))
console.timeEnd('same execution')

console.log("Array 5: ", same([1, 8, 6, 3, 7, 10, 1], [100, 1, 1, 64, 36, 9, 36]))
console.timeEnd('same execution')
