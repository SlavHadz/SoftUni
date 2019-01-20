function solve(input) {
    let [distance, inputMetric, outputMetric] = input;
    distance = Number(distance);
    switch (inputMetric) {
        case 'mm':
            distance = distance / 1000;
            break;
        case 'cm':
            distance = distance / 100;
            break;
        default:
            distance = distance / 1;
    }

    switch (outputMetric) {
        case 'mm':
            distance = distance * 1000;
            break;
        case 'cm':
            distance = distance * 100;
            break;
        default: distance = distance * 1;
    }
    console.log(distance.toFixed(3));
}

solve(['12', 'mm', 'm']);