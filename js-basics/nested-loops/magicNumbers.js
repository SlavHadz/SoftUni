function solve(input) {
    let num = +input[0];
    resultArray = [];
    for(let x1 = 1; x1 < 10; x1 += 1) {
        for(let x2 = 1; x2 < 10; x2 += 1) {
            for(let x3 = 1; x3 < 10; x3 += 1) {
                for(let x4 = 1; x4 < 10; x4 += 1) {
                    for(let x5 = 1; x5 < 10; x5 += 1) {
                        for(let x6 = 1; x6 < 10; x6 += 1) {
                            if(x1 * x2 * x3 * x4 * x5 * x6 === num) {
                                resultArray.push(`${x1}${x2}${x3}${x4}${x5}${x6}`);
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(resultArray.join(' '))
}

solve([2]);