function solve(input) {
    let maxExponent = +input[0];
    for(let i = 0; i <= maxExponent; i += 2) {
        console.log(Math.pow(2, i));
    }
}

solve([7]);