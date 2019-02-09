function solve(input) {
    let len = +input.shift();
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < len; i += 1) {
        let num = +input.shift();
        leftSum += num;
    }
    for (let i = 0; i < len; i += 1) {
        let num = +input.shift();
        rightSum += num;
    }

    if(leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}

solve([2, 10, 90, 60, 40]);