console.log("(1)Soma")
console.log("(2)Subtração")
console.log("(3)Divisão")
console.log("(4)Multiplicação")

const opera = Number(process.argv[2]);
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (opera){

    case 1:
console.log(num1 + num2);
 break;

 case 2:
console.log(num1 - num2);
 break;

 case 3:
console.log( num1 / num2);
 break;

 case 4:
console.log(num1 * num2);
 break;
}

