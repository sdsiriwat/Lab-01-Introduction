// function greet(name){
//     console.log('Hello ' + name);
// }
// greet('John');

function greet(name: string){
    return 'Hello ' + name
}
console.log(greet('John'))


function calculateSum(scores: number[]): number {
    let total: number = 0;

    for (let i = 0; i < scores.length; i++) {
        // @ts-ignore
        total = total + scores[i];
    }
    return total;
}

let studentScores: number[] = [10, 20, 30];

console.log("ผลรวมคะแนนคือ: " + calculateSum(studentScores));

