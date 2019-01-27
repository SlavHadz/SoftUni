function solve(input) {
    let [flowerType, flowerCount, budget] = input;
    let discount = 1;
    let finalPrize = 0;

    if(flowerType == 'Roses') {
        if(flowerCount > 80) {
            discount = 0.9;
        }
        finalPrize = flowerCount * 5 * discount;
    } else if (flowerType == 'Dahlias') {
        if(flowerCount > 90) {
            discount = 0.85;
        }
        finalPrize = flowerCount * 3.8 * discount;
    } else if (flowerType == 'Tulips') {
        if(flowerCount > 80) {
            discount = 0.85
        }
        finalPrize = flowerCount * 2.8 * discount;
    } else if (flowerType == 'Narcissus') {
        if(flowerCount < 120) {
            discount = 1.15;
        }
        finalPrize = flowerCount * 3 * discount;
    } else {
        if(flowerCount < 80) {
            discount = 1.2;
        }
        finalPrize = flowerCount * 2.5 * discount;
    }

    let difference = Math.abs(finalPrize - budget).toFixed(2);
    if(finalPrize > budget) {
        console.log(`Not enough money, you need ${difference} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${difference} leva left.`)
    }
}

solve(['Roses', 55, 250]);