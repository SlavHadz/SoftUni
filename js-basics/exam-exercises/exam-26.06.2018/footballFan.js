function solve(input){
    let [shirtPrize, sumNeeded] = input.map(Number);
    let shortsPrize = shirtPrize * 0.75;
    let socksPrize = shortsPrize * 0.2;
    let bootsPrize = (shortsPrize + shirtPrize) * 2;
    let fullPrize = (shirtPrize + shortsPrize + socksPrize + bootsPrize) * 0.85;
    if(fullPrize >= sumNeeded) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${fullPrize.toFixed(2)} lv.`);
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${(sumNeeded - fullPrize).toFixed(2)} lv. more.`);
    }
}

solve([25, 100]);