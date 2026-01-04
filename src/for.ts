// let i = 0;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (let i = 0; i < color.length; i++) {
//     console.log(color[i])
// }


console.log("Name Check Challenge");

let names: string[] = ["Robe", "Jonathan", "Ann", "Benjamin", "May"];
for (let i = 0; i < names.length; i++) {
    if (names[i].length > 6) {
        console.log("สวัสดีคุณ " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}