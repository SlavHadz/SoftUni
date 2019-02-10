function solve(input) {
    let len = +input.shift();
    let numbers = input.map(Number);
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let diff = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < len; i += 1) {
            leftNumbers = [...numbers];
        let testedNum = leftNumbers.splice(i, 1);
        let numbersSum = leftNumbers.reduce((num, sum) => (num + sum), 0);
        let currentDiff = numbersSum - testedNum[0];
        if(testedNum[0] === numbersSum) {
            console.log('Yes');
            console.log(`Sum = ${testedNum}`);
            return;
        } else {
            if(biggestNum < testedNum[0]) {
                biggestNum = testedNum[0];
                diff = currentDiff;
            }
        }
    }
    console.log('No');
    console.log(`Diff = ${Math.abs(diff)}`);
}

solve(['3', '5', '5', '1']);