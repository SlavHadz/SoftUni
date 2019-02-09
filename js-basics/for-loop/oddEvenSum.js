function solve(input) {
    let len = +input[0];
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 1; i <= len; i += 1) {
        if(i % 2 == 0) {
            evenSum += Number(input[i]);
        } else {
            oddSum += Number(input[i]);
        }
    }
    if(evenSum == oddSum) {
        console.log(`Yes`);
        console.log(`Sum = ${evenSum}`);
    } else {
        console.log('No');
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}

solve([4, 10, 50, 60, 20]);