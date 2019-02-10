function solve(input) {
    let number = +input.shift();
    let firstInteger  = Math.floor(number / 100);
    let secondInteger = Math.floor(number / 10) % 10;
    let thirdInteger = number % 10;
    let rows = firstInteger + secondInteger;
    let columns = firstInteger + thirdInteger;
    for(let i = 1; i <= rows; i += 1) {
        let rowNumbers = [];
        for(let j = 1; j <= columns; j += 1) {

            if(number % 5 === 0 || number % 3 === 0) {
                if(number % 5 === 0) {
                    number -= firstInteger;
                    rowNumbers.push(number);
                    continue;
                }
                if(number % 3 === 0) {
                    number -= secondInteger;
                    rowNumbers.push(number);
                    continue;
                }
            } else {
                number += thirdInteger;
                rowNumbers.push(number);
            }
        }
        console.log(rowNumbers.join(' '));
    }
}

solve([376]);