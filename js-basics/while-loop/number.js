function solve(input) {
    let number = +input.shift();
    while(number < 1 || number > 100) {
        console.log('Invalid number!');
        number = +input.shift();
    }
    console.log(`The number is: ${number}`);
}

solve([124, 134, 1, 34]);