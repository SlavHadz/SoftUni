function trapArea(input) {
    let a = +input.shift();
    let b = +input.shift();
    let height = +input.shift();
    let area = (a + b) * height / 2;
    console.log(area.toFixed(2));
}

trapArea([8, 13, 7])