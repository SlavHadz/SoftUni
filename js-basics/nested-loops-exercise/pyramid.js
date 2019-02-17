function solve(input) {
    let num = +input[0];
    let current = 1;
    let printedLine = '';
    let isBigger = false;
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            if(current > num) {
                isBigger = true;
                break;
            }
            printedLine += current + ' ';
            current += 1;
        }
        console.log(printedLine);
        printedLine = '';
        if(isBigger){
            break;
        }
    }
}

solve([10]);