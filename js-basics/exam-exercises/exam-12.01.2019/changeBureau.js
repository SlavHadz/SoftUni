function solve(input) {
    let [bitcoinCount, chineseCount, commission] = input.map(Number),
        bitLeva = bitcoinCount * 1168,
        chinLeva = chineseCount * 0.15 * 1.76,
        sumLeva = bitLeva + chinLeva,
        sumEuro = sumLeva / 1.95;
        sumEuro -= (sumEuro * (commission * 0.01 ));
        console.log(sumEuro.toFixed(2));
}

solve([1, 5, 5]);