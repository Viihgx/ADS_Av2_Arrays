function sumArray(arr) {
    let sum = 0; 
     for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  let numeros = [1, 2, 3, 4, 5];
let resultado = sumArray(numeros);

console.log(resultado); // 15
