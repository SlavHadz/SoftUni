function solve(input) {
    let chrysCount = +input.shift(),
        roseCount = +input.shift(),
        tulipCount = +input.shift(),
        season = input.shift(),
        holiday = input.shift();
    let fullPrize = 0,
        chrysPrice = 0,
        rosePrice = 0,
        tulipPrice = 0;

    switch (season) {
        case ('Spring'):
            chrysPrice = chrysCount * 2.00;
            rosePrice = roseCount * 4.10;
            tulipPrice = tulipCount * 2.50;
            fullPrize = chrysPrice + rosePrice + tulipPrice;
            break;
        case ('Summer'):
            chrysPrice = chrysCount * 2.00;
            rosePrice = roseCount * 4.10;
            tulipPrice = tulipCount * 2.50;
            fullPrize = chrysPrice + rosePrice + tulipPrice;
            break;
        case ('Autumn'):
            chrysPrice = chrysCount * 3.75;
            rosePrice = roseCount * 4.50;
            tulipPrice = tulipCount * 4.15;
            fullPrize = chrysPrice + rosePrice + tulipPrice;
            break;
        case ('Winter'):
            chrysPrice = chrysCount * 3.75;
            rosePrice = roseCount * 4.50;
            tulipPrice = tulipCount * 4.15;
            fullPrize = chrysPrice + rosePrice + tulipPrice;
            break;
    }

    if (holiday == 'Y') {
        fullPrize = fullPrize * 1.15;
    }

    if (tulipCount > 7 && season == 'Spring') {
        fullPrize *= 0.95;
    }

    if (roseCount >= 10 && season == 'Winter') {
        fullPrize *= 0.90;
    }

    if ((chrysCount + roseCount + tulipCount) > 20) {
        fullPrize *= 0.80;
    }

    fullPrize += 2;

    console.log(fullPrize.toFixed(2));
};

solve([3, 10, 9, 'Winter', 'N']);