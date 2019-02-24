function solve(input) {
    let name = input.shift();
    let [budget, beerCount, chipsCount] = input.map(Number);
    let beerPrice = beerCount * 1.20;
    let chipsPrice = beerPrice * 0.45;
    let chipsFullPrice = Math.ceil(chipsPrice * chipsCount);
    let moneySpend = beerPrice + chipsFullPrice;
    let difference = budget - moneySpend;
    if(budget >= moneySpend) {
        console.log(`${name} bought a snack and has ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(Math.abs(difference)).toFixed(2)} more leva!`);
    }
}

solve(['George', 10, 2, 3]);