function weddingDecoration(input) {
    let budget = +input.shift();
    let prize;
    let balloonsCount = 0;
    let flowersCount = 0;
    let candlesCount = 0;
    let ribbonsCount = 0;
    let moneySpend = 0;
    while (budget > 0) {
        let item = input.shift();
        if (item == 'stop') {
            console.log(`Spend money: ${moneySpend.toFixed(2)}`);
            console.log(`Money left: ${budget.toFixed(2)}`);
            break;
        }
        let quantity = +input.shift();
        switch (item) {
            case 'balloons':
                prize = quantity * 0.1;
                budget -= prize;
                moneySpend += prize;
                balloonsCount += quantity;
                break;
            case 'flowers':
                prize = quantity * 1.5;
                budget -= prize;
                moneySpend += prize;
                flowersCount += quantity;
                break;
            case 'candles':
                prize = quantity * 0.5;
                budget -= prize;
                moneySpend += prize;
                candlesCount += quantity;
                break;
            case 'ribbon':
                prize = quantity * 2;
                budget -= prize;
                moneySpend += prize;
                ribbonsCount += quantity;
                break;
        }
    }
    if(budget <= 0) {
        console.log(`All money is spent!`);
    }
    console.log(`Purchased decoration is ${balloonsCount} balloons, ${ribbonsCount} m ribbon, ${flowersCount} flowers and ${candlesCount} candles.`);
}

weddingDecoration([30, 'flowers', 10, 'balloons', 20, 'candles', 10, 'ribbon', 8]);