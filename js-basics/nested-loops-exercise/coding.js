function solve(input) {
    let num = input[0];
    let numArr = num.split('');
    let len = numArr.length;
    for(let i = 0; i < len; i++) {
        let currentNum = Number(numArr.pop());
        if(+currentNum === 0) {
            console.log('ZERO');
            continue;
        }
        charCodeNumber = currentNum + 33;
        let charCode = String.fromCharCode(charCodeNumber);
        let printedLine = '';
        for(let j = 0; j < currentNum; j++) {
            printedLine += charCode;
        }
        console.log(printedLine);
    }
}

solve(['9347439']);