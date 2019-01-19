function solve(input) {
    let [vacationPrize,
         puzzleCount,
         dollCount,
         teddyBearCount,
         minionCount,
         truckCount] = input.map(Number);
    let discount = 0
    let fullCount = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;
    if(fullCount >= 50) {
        discount = 0.25;
    }
    let puzzlePrize = puzzleCount * 2.60,
        dollPrize = dollCount * 3,
        teddyPrize = teddyBearCount * 4.10,
        minionPrize = minionCount * 8.20,
        truckPrize = truckCount * 2;
    let fullPrize = puzzlePrize + dollPrize + teddyPrize + minionPrize + truckPrize;
    fullPrize = fullPrize - (fullPrize * discount);
    fullPrize = fullPrize * 0.90;
    let moneyLeft = Math.abs(fullPrize - vacationPrize);
    if(fullPrize >= vacationPrize) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    }
}