// const add = (a:number,b:number) => {
//     return a+b;
// }
// const result = add(1,2) + 0;
// console.log(result, 'type of result:', typeof result);

//
// const add = (a:number,b:number):string => {
//     return a+b;
// }
// const result = add(1,2) + 0;
// console.log(result, 'type of result:', typeof result);
//
// const add = (a:number,b:number):string => {
//     const result =  a+b;
//     return result.toString();
// }
// const result = add(1,2) + 0;
// console.log(result, 'type of result:', typeof result);

const findMax = (numbers: number[]): string => {
    let maxVal = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        // @ts-ignore
        if (numbers[i] > maxVal) {
            maxVal = numbers[i];
        }
    }
    // @ts-ignore
    return "ค่ามากที่สุดคือ: " + maxVal.toString();
}

let scoresList = [40, 95, 20, 88, 10];
let resultMax = findMax(scoresList);

console.log(resultMax);
console.log("Type of result:", typeof resultMax);