function solve(input) {
    let isPrime = true;
    let primeSum = 0;
    let nonPrimeSum = 0;
    let num = input.shift();
    while(num !== 'stop') {
        num = Number(num);
        if(num < 0) {
            console.log('Number is negative.');
            num = input.shift();
            continue;
        }
        if(num === 1) {
            isPrime = false;
        }
        for(let i = 2; i < num; i++) {
            if(num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }

        isPrime = true;
        num = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve([3, 9, 0, 7, 19, 4, 'stop']);