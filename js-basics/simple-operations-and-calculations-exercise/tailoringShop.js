function solve(input) {
    let tableCount = +input.shift(),
        tableLong = +input.shift(),
        tableWidth = +input.shift();

    let careSide = tableLong / 2,
        careArea = careSide * careSide,
        carePriceDollar = careArea * 9 * tableCount;
    let pokrivkaArea = (tableLong + 0.60) * (tableWidth + 0.60),
        pokrivkaPriceDollar = pokrivkaArea * 7 * tableCount;
    let fullPriceDollar = (carePriceDollar + pokrivkaPriceDollar).toFixed(2);
    let fullPriceLeva = ((carePriceDollar + pokrivkaPriceDollar) * 1.85).toFixed(2);
    console.log(`${fullPriceDollar} USD`);
    console.log(`${fullPriceLeva} BGN`)
}

solve([5, 1.00, 0.50]);