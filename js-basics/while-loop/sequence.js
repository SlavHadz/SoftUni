function solve(input) {
    let limit = +input.shift();
    let number = 1;
    while(number <= limit) {
        console.log(number);
        number = number * 2 + 1;
    }
}

solve(['78']);