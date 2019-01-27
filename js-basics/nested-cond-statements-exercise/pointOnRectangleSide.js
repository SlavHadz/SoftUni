function solve(input) {
    let [x1, y1, x2, y2, x, y] = input.map(Number);
    if ((x == x1 || x == x2) && (y >= y1 && y <= y2)) {
        console.log('Border')
    } else if ((y == y1 || y == y2) && (x >= x1 && x <= x2)) {
        console.log('Border')
    } else {
        console.log('Inside / Outside');
    }
}

solve([2, -3, 12, 3, 12, -1]);