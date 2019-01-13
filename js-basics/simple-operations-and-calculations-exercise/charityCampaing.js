function solve(input) {
    let days = +input.shift(),
        bakers = +input.shift(),
        cakeNumber = +input.shift(),
        goufretteNumber = +input.shift(),
        pancakeNumber = +input.shift(),
        oneBakerPrice = (cakeNumber * 45) + (goufretteNumber * 5.80) + (pancakeNumber * 3.20);
        oneDayPrice = oneBakerPrice * bakers;
        finalPrice = (oneDayPrice * days) * (7 / 8);
        console.log(finalPrice.toFixed(2));
}

solve([20, 8, 14, 30, 16]);