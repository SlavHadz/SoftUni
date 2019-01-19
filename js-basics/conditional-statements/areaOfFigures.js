function solve(input) {
    let [figure, a, b] = input;
    let area;
    switch (figure) {
        case ('square'):
            area = a * a;
            break;
        case ('rectangle'):
            area = a * b;
            break;
        case ('circle'):
            area = Math.PI * a * a;
            break;
        case ('triangle'):
            area = (a * b) / 2;
            break;
    }

    console.log(area.toFixed(3));
}

solve(['triangle', '2', '3']);