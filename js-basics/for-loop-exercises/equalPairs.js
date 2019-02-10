function solve(input){
    let len = +input.shift();
    let pairsArr = [];

    for(let i = 0; i < len; i += 1){
        let firstNum = +input.shift();
        let secondNum = +input.shift();
        let sum = firstNum + secondNum;
        pairsArr.push(sum);
    }

    maxDiff = 0;
    pairsArr.reduce((prev, current) => {
        let currentDiff = Math.abs(current - prev);
        if(currentDiff > maxDiff) {
            maxDiff = currentDiff;
        }
        return current;
    }, pairsArr[0]);

    if(maxDiff == 0) {
        console.log(`Yes, value=${pairsArr[0]}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}

solve([3, 1, 2, 3, 0, 4, -1]);