function solve(input){
    let [partyPrize, loveLettersCount, rosesCount, keyCount, funnyCount, surpriseCount] = input.map(Number);
    let fullCount = loveLettersCount + rosesCount + keyCount + funnyCount + surpriseCount;
    let income = loveLettersCount * 0.6 + rosesCount * 7.2 + keyCount * 3.6 + funnyCount * 18.2 + surpriseCount * 22;
    if(fullCount >= 25) {
        income = income * 0.65;
    }
    finalIncome = income * 0.9;
    if(finalIncome >= partyPrize){
        console.log(`Yes! ${(finalIncome - partyPrize).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrize - finalIncome).toFixed(2)} lv needed.`);
    }
}

solve([40.8, 20, 25, 30, 50, 10]);