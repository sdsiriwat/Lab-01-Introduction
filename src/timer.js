// waitAndPrint = (message, delay) => {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }
//
// // Example usage:
// waitAndPrint("Hello, world!", 2000);


waitAndPrint = (message , delay) => {
    setTimeout(() => {
        const nextMessage = message + " world";
        console.log(nextMessage);
        waitAndPrint(nextMessage, delay);
    }, delay);
}


waitAndPrint("Hello", 3000);