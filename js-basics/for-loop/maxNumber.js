function solve(input) {
    let len = +input.shift();
    let maxNumber = input[0];
    for(let i = 0; i < len; i += 1) {
        let num = +input[i]
        if(num > maxNumber) {
            maxNumber = input[i];
        }
    }
    console.log(maxNumber);
}

solve([2, '100', '99']);