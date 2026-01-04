// @ts-ignore
export const findMax = (numbers: number[]): string => {
    let maxVal = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        // @ts-ignore
        if (numbers[i] > maxVal) {
            maxVal = numbers[i];
        }
    }
    // @ts-ignore
    return maxVal.toString();
}