function solve(input) {
    let [currentAge, washPrice, toyPrice] = input.map(Number);
    let moneySum = 0;
    let giftMoney = 10
    for(let age = 1; age <= currentAge; age += 1) {
        if(age % 2 == 0) {
            moneySum += giftMoney - 1;
            giftMoney += 10;
        } else {
            moneySum += toyPrice;
        }
    }
    if(washPrice <= moneySum) {
        console.log(`Yes! ${(moneySum - washPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washPrice - moneySum).toFixed(2)}`);
    }
}

solve([21, 1570.98, 3]);