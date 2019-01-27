function solve(input) {
    let [type, row, col] = input;
    let prize;

    switch (type) {
        case 'Premiere':
            prize = 12;
            break;
        case 'Normal':
            prize = 7.50;
            break;
        case 'Discount':
            prize = 5;
            break;
    }

    let income = prize * row * col;
    console.log(income.toFixed(2));
}

solve(['Premiere', 10, 12]);