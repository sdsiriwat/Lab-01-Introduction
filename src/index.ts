// @ts-ignore
// import { add,subtract } from './function';
import add, { subtract } from './function';
// @ts-ignore
import { findMax } from './function2';


const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);

const numbers = [5, 20, 100, 3];
console.log("ค่ามากสุด (findMax):", findMax(numbers));