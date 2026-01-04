// const greet = function greet(name: any){
//     return 'Hello ' + name
// }
//
// console.log(greet('John'))


const greet = (name: any) => 'Hello ' + name
console.log(greet('John'))


const multiply = (x: number,y: number) => { return x * y }
console.log(multiply(5, 10))


const getMax = (a: number, b: number): number => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// ทดลองเรียกใช้ function
console.log(getMax(50, 20));
console.log(getMax(7, 12));
console.log(getMax(100, 100));