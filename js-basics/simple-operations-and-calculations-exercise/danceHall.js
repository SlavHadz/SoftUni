function solve(input) {
    let length = +input.shift() * 100,
        width = +input.shift() * 100,
        a = +input.shift() * 100;
    let hallArea = length * width,
        dresserArea = Math.pow(a, 2),
        bench = hallArea / 10,
        freeArea = hallArea - (dresserArea + bench),
        result = freeArea / (7040);
    console.log(parseInt(result));
}

solve([50, 25, 2]);