function solve(input) {
    let budget = +input.shift(),
        season = input.shift(),
        fishermen = +input.shift();
    let initialPrize = 0;
    let discount = 1;
    let additionalDiscount = 1;

    if(season == 'Spring') {
        initialPrize = 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        initialPrize = 4200;
    } else {
        initialPrize = 2600;
    }

    if(fishermen <= 6) {
        discount = 0.9;
    } else if(fishermen > 6 && fishermen < 12) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    if(fishermen % 2 == 0 && season !== 'Autumn') {
        additionalDiscount = 0.95;
    }

    let finalPrize = initialPrize * discount * additionalDiscount;
    let moneyDifference = Math.abs(finalPrize - budget).toFixed(2);
    if(finalPrize > budget) {
        console.log(`Not enough money! You need ${moneyDifference} leva.`)
    } else {
        console.log(`Yes! You have ${moneyDifference} leva left.`);
    }
}

solve([3600, 'Autumn', 6]);