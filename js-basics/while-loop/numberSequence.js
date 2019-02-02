function solve(input) {
    let num = input.shift();
    let minNumber = num;
    let maxNumber = num;
    while(num !== 'END') {
        num = Number(num);
        if(num < minNumber) {
            minNumber = num;
        }
        if(num > maxNumber) {
            maxNumber = num;
        }
        num = input.shift();
    }
    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}

solve([10, 20, 304, 0, 50, 'END']);