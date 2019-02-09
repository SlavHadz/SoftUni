function solve(input) {
    let len = +input.shift();
    let minNumber = input[0];
    for(let i = 0; i < len; i += 1) {
        let num = +input[i]
        if(num < maxNumber) {
            minNumber = input[i];
        }
    }
    console.log(minNumber);
}