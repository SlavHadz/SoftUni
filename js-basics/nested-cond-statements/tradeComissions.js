function solve(input) {
    let city = input.shift().toLowerCase();
    let sells = +input.shift();
    let sellsRate;
    let table = {
        sofia: {
            low: 0.05,
            medium: 0.07,
            high: 0.08,
            veryHigh: 0.12
        },
        varna: {
            low: 0.045,
            medium: 0.075,
            high: 0.1,
            veryHigh: 0.13
        },
        plovdiv: {
            low: 0.055,
            medium: 0.08,
            high: 0.12,
            veryHigh: 0.145
        }
    }

    if(city !== 'sofia' && city !== 'varna' && city !== 'plovdiv') {
        console.log('error');
        return;
    }

    if(sells >= 0 && sells <= 500) {
        sellsRate = 'low';
    } else if(sells > 500 && sells <= 1000) {
        sellsRate = 'medium';
    } else if (sells > 1000 && sells <= 10000) {
        sellsRate = 'high';
    } else if (sells > 10000) {
        sellsRate = 'veryHigh';
    } else {
        console.log('error');
        return;
    }

    let procent = table[city][sellsRate];
    let commision = sells * procent;
    console.log(commision.toFixed(2));
}

solve(['Sofia', '1500']);