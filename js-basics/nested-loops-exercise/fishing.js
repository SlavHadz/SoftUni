function solve(input) {
    let dailyQuota = +input.shift();
    let finalPrize = 0;
    let fishesCounter = 0;
    let fishName = input.shift();
    while(fishName !== 'Stop') {
        if(fishName == 'Stop'){
            break;
        }
        if(dailyQuota === 0) {
            console.log('Lyubo fulfilled the quota!');
            console.log('Lyubo lost 0 leva today.');
            return;
        }
        let fishWeight = +input.shift();
        fishesCounter += 1;
        let fishNamePrize = 0;
        for(let j = 0; j < fishName.length; j++){
            let letterMoney = Number(fishName.charCodeAt(j));
            fishNamePrize += letterMoney;
        }
        let fishFullPrize = fishNamePrize / fishWeight;
        if(fishesCounter % 3 === 0) {
            finalPrize -= fishFullPrize;
        } else {
            finalPrize += fishFullPrize;
        }
        if(fishesCounter === dailyQuota) {
            console.log('Lyubo fulfilled the quota!');
            break;
        }
        fishName = input.shift();
    }
    if(finalPrize <= 0) {
        console.log(`Lyubo's profit from ${fishesCounter} fishes is ${Math.abs(finalPrize.toFixed(2))} leva.`)
    } else {
        console.log(`Lyubo lost ${finalPrize.toFixed(2)} leva today.`);
    }
}

solve([3, 'catfish', 70, 'carp', 20, 'tench', 14]);