function solve(input) {
    let radians = +input.shift();
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed());
}

solve([3.1416]);