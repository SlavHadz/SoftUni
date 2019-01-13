function solve(input) {
    let whiskeyPrice = +input.shift(),
        beerCount = +input.shift(),
        wineCount = +input.shift(),
        rakiyaCount = +input.shift(),
        whiskeyCount = +input.shift(),
        rakiyaPrice = whiskeyPrice / 2;
        winePrice = rakiyaPrice * 0.60;
        beerPrice = rakiyaPrice * 0.20;
        fullPrice = (whiskeyPrice * whiskeyCount) + (beerCount * beerPrice) + (wineCount * winePrice) + (rakiyaCount * rakiyaPrice);
        console.log(fullPrice.toFixed(2));
}

solve([50, 10, 3.5, 6.5, 1]);