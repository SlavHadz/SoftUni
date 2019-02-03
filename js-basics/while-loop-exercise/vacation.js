function solve(input) {
    let moneyNeeded = +input.shift(),
        savings = +input.shift();
    let spendingInRow = 0;
    let daysPassed = 0;
    moneySaved = false;
    while(!moneySaved) {
        let command = input.shift();
        let amount = +input.shift();
        if(command == 'spend') {
            spendingInRow += 1;
            daysPassed += 1;
            if(spendingInRow == 5) {
                console.log(`You can't save the money.`);
                console.log(daysPassed);
                break;
            }
            savings = savings - amount;
            if(savings <= 0) {
                savings = 0;
            }
        } else {
            spendingInRow = 0;
            savings = savings + amount;
            daysPassed += 1;
            if(savings >= moneyNeeded) {
                console.log(`You saved the money for ${daysPassed} days.`);
                moneySaved = true;
                break;
            }
        }
    }
}

solve([2000, 1000, 'spend', 1200, 'save', 2000]);