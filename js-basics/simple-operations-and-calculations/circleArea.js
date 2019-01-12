function circleArea(input) {
    let radius = +input.shift();
    let perimeter = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleArea([4.5]);