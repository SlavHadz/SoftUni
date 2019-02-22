function solve(input){
    let [wiskeyPrize, waterQuantity, wineQuantity, champagneQuantity, wiskeyQuantity] = input.map(Number);
    let champagnePrize = wiskeyPrize * 0.5;
    let winePrize = champagnePrize * 0.4;
    let waterPrize = champagnePrize * 0.1;
    let fullPrize = wiskeyPrize * wiskeyQuantity + waterQuantity * waterPrize + champagneQuantity * champagnePrize + wineQuantity * winePrize;
    console.log(fullPrize.toFixed(2));
}

solve([50, 10, 3.5, 6.5, 1]);