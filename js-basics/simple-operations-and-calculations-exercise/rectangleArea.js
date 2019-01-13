function solve(input) {
    let x1 = +input.shift(),
        y1 = +input.shift(),
        x2 = +input.shift(),
        y2 = +input.shift();

    let xSide = Math.abs(x1 - x2),
        ySide = Math.abs(y2 - y1),
        perimeter = xSide * 2 + ySide * 2;
    let area = xSide * ySide;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

solve([60, 20, 10, 50]);