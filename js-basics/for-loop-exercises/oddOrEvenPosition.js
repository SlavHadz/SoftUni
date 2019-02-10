function solve(input) {
    let len = input[0],
        oddSum = 0,
        oddMin = Number.MAX_SAFE_INTEGER,
        oddMax = Number.MIN_SAFE_INTEGER,
        evenSum = 0,
        evenMin = Number.MAX_SAFE_INTEGER,
        evenMax = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= len; i += 1) {
        let number = Number(input[i]);
        if (i % 2 == 0) {
            evenSum += number;
            if (evenMax < number) {
                evenMax = number;
            }
            if (evenMin > number) {
                evenMin = number;
            }
        } else {
            oddSum += number;
            if (oddMax < number) {
                oddMax = number;
            }
            if (oddMin > number) {
                oddMin = number;
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin == Number.MAX_SAFE_INTEGER ? 'No' : oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax == Number.MIN_SAFE_INTEGER ? 'No' : oddMax.toFixed(2)},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin == Number.MAX_SAFE_INTEGER ? 'No' : evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax == Number.MIN_SAFE_INTEGER ? 'No' : evenMax.toFixed(2)}`);
}

solve([6, 2, 3, 5, 4, 2, 1]);