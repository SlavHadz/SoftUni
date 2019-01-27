function solve(input) {
    let n1 = +input.shift();
    let n2 = +input.shift();
    let operator = input.shift();
    let result = 0;
    let isEven = '';

    switch (operator) {
        case '+':
            result = n1 + n2;
            isEven = result % 2 == 0 ? 'even' : 'odd';
            console.log(`${n1} + ${n2} = ${result} - ${isEven}`);
            break;
        case '-':
            result = n1 - n2;
            isEven = result % 2 == 0 ? 'even' : 'odd';
            console.log(`${n1} - ${n2} = ${result} - ${isEven}`);
            break;
        case '*':
            result = n1 * n2;
            isEven = result % 2 == 0 ? 'even' : 'odd';
            console.log(`${n1} * ${n2} = ${result} - ${isEven}`);
            break;
        case '/':
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            result = (n1 / n2).toFixed(2);
            console.log(`${n1} / ${n2} = ${result}`);
            break;
        case '%':
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`)
    }
}

solve([22, 0, '/']);