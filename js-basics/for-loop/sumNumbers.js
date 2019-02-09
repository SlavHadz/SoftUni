function solve(input) {
    let len = input.shift();
    let sum = 0;
    for(let i = 0; i < len; i += 1) {
        sum += +input[i];
    }

    console.log(sum);
}

solve(['2', '5', '4']);