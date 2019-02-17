function solve(input){
    let [nNumber, lNumber] = input.map(Number);
    let printedLine = '';
    for(let x1 = 1; x1 <= nNumber; x1++){
        for(let x2 = 1; x2 <= nNumber; x2++){
            for(let x3 = 1; x3 <= lNumber; x3++){
                let letter3 = String.fromCharCode(96 + x3);
                for(let x4 = 1; x4 <= lNumber; x4++){
                    let letter4 = String.fromCharCode(96 + x4);
                    for(let x5 = 1; x5 <= nNumber; x5++){
                        if(x5 > x1 && x5 > x2){
                            printedLine += `${x1}${x2}${letter3}${letter4}${x5} `;
                        }
                    }
                }
            }
        }
    }
    console.log(printedLine);
}

solve([2, 4]);