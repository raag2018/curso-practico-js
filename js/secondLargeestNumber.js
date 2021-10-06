const secondLargeestNumber = (numbers) => {
    let first = numbers[0];
    let second = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        }
        if (numbers[i] > second && numbers[i] < first) {
            second = numbers[i];
        }
    }
    return second;
}
let nums = [8, 4, 10, 9, 11];
console.log(secondLargeestNumber(nums));
const swap_text = (letters) => {
    result = "";
    for (let letter of letters) {
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }
    return result;
}
console.log(swap_text("hola TODOS"));