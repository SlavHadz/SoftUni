function solve(input) {
    let [x1, y1, x2, y2, x, y] = input.map(Number);
    let xInside = x1 <= x && x <= x2;
    let yInside = y1 <= y && y <= y2;
    if(xInside && yInside) {
        console.log('Inside');
    } else {
        console.log('Outside');
    }
}

solve([2, -3, 12, 3, 8, -1])