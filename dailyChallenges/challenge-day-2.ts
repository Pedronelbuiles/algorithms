/**
 *  const arrayToCheck: number[] = [2, 6, 9, 2, 1, 8, 5, 6, 3];
 *  maxSubArraySum(arrayToCheck, 3)
 *  El siguiente Reto seria crear una función que recibe 2 parámetros un arreglo de números y un numero
 *  El objetivo es encontrar la combinación de números consecutivos mas grande dentro del arreglo
 *  la cantidad de numeros consecutivos a evaluar es la que esta proporcionada por el segundo argumento
 *  como en este caso es el numero 3, la funcion lo que haria es, sumar
 *  2+ 6 + 9 = 17
 *  6 + 9 + 2 = 17
 *  9 + 2 + 1 = 12
 *  2 + 1 + 8 = 11
 *  1 + 8 + 5  = 14
 *  8 + 5 + 6 = 19
 *  5 + 6 + 3 = 14
 *  Entonces en este caso la función retornaría 19 porque es la combinación mas grande
 */

const maxSubArraySum = (arrNum: number[], size: number):number => {
    let biggerSum = 0;
    let lastPosition = 0;

    for (let index = 0; index < arrNum.length; index++) {
        const arrProcess = [...arrNum];
        if (lastPosition <= arrNum.length - size) {
            const internSum = arrProcess.slice(lastPosition, lastPosition + size).reduce((a, b) => a + b, 0)
            if (internSum > biggerSum) {
                biggerSum = internSum
            }
            console.log(`Se suman los números: ${arrProcess.slice(lastPosition, lastPosition + size)} `)
            lastPosition++
        }

    }
    return biggerSum
}

const arrayToCheck: number[] = [2, 6, 9, 2, 1, 8, 5, 6, 3];
console.log(maxSubArraySum(arrayToCheck, 3))