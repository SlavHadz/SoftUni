function solve(input) {
    let num = +input.shift();
    let printedLine = '';
    for (let x1 = 1; x1 <= 9; x1++) {
        let x1Special = false;
        if (num % x1 === 0) {
            x1Special = true;
        }
        for (let x2 = 1; x2 <= 9; x2++) {
            let x2Special = false;
            if (num % x2 === 0) {
                x2Special = true;
            }
            for (let x3 = 1; x3 <= 9; x3++) {
                let x3Special = false;
                if (num % x3 === 0) {
                    x3Special = true;
                }
                for (let x4 = 1; x4 <= 9; x4++) {
                    let x4Special = false;
                    if (num % x4 === 0) {
                        x4Special = true;
                    }
                    if(x1Special && x2Special && x3Special && x4Special){
                        printedLine += `${x1}${x2}${x3}${x4} `;
                    }
                }
            }
        }
    }
    console.log(printedLine);
}

solve([3]);