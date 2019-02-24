function solve(input){
    let number = input.shift();
    let third = Number(number.substring(0, 1));
    let second = Number(number.substring(1, 2));
    let first = Number(number.substring(2, 3));
    for(let x1 = 1; x1 <= first; x1++) {
        for(let x2 = 1; x2 <= second; x2++){
            for(let x3 = 1; x3 <= third; x3++){
                let result = x1 * x2 * x3;
                console.log(`${x1} * ${x2} * ${x3} = ${result};`);
            }
        }
    }
}

solve(['324']);