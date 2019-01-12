function triangleArea(input) {
    let base = +input.shift();
    let h = +input.shift(),
    area = (base * h) / 2;
    console.log(area.toFixed(2));
}

triangleArea([20, 30]);