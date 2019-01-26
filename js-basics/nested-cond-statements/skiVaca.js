function solve(input) {
    let daysToStay = +input.shift();
    let roomType = input.shift();
    let rating = input.shift();
    let originalPrize = 0;
    let stayLength = '';

    if(daysToStay < 10) {
        stayLength = 'low'
    } else if (daysToStay >= 10 && daysToStay <= 15) {
        stayLength = 'medium';
    } else {
        stayLength = 'high';
    }

    let table = {
        'room for one person': {
            'low': 0,
            'medium': 0,
            'high': 0
        },
        'apartment': {
            'low': 0.3,
            'medium': 0.35,
            'high': 0.5
        },
        'president apartment': {
            'low': 0.1,
            'medium': 0.15,
            'high': 0.2
        }
    }

    switch (roomType) {
        case 'room for one person':
        originalPrize = (daysToStay - 1) * 18;
        break;
        case 'apartment':
        originalPrize = (daysToStay - 1) * 25;
        break;
        case 'president apartment':
        originalPrize = (daysToStay - 1) * 35;
    }

    let discount = table[roomType][stayLength];
    let prizeAfterDiscount = originalPrize - (originalPrize * discount);
    if(rating == 'positive') {
        prizeAfterDiscount += (prizeAfterDiscount * 0.25);
    } else {
        prizeAfterDiscount -= (prizeAfterDiscount * 0.1);
    }

    console.log(prizeAfterDiscount.toFixed(2));
}

solve(['14', 'apartment', 'positive']);