let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (const c of color) {
    console.log(c);
}


for (const index in color) {
    console.log(`Index: ${index}, Value: ${color[index]}`);
}
