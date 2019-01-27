function solve(input) {
    let [month, daysToStay] = input;
    let periodToStay = '';
    let studioPrize = 0;
    let apartmentPrize = 0;
    let prizes = {
        'studio': {
            mayOrOctober: 50,
            juneOrSeptember: 75.2,
            julyOrAugust: 76
        },
        'apartment': {
            mayOrOctober: 65,
            juneOrSeptember: 68.7,
            julyOrAugust: 77
        }
    }

    if(month == 'May' || month == 'October') {
        studioPrize = prizes['studio']['mayOrOctober'] * daysToStay;
        apartmentPrize = prizes['apartment']['mayOrOctober'] * daysToStay;
        if(daysToStay > 7 && daysToStay <= 14) {
            studioPrize = studioPrize * 0.95;
        }
        if(daysToStay > 14) {
            studioPrize = studioPrize * 0.70;
            apartmentPrize = apartmentPrize * 0.90;
        }
    } else if(month == 'June' || month == 'September') {
        studioPrize = prizes['studio']['juneOrSeptember'] * daysToStay;
        apartmentPrize = prizes['apartment']['juneOrSeptember'] * daysToStay;
        if(daysToStay > 14) {
            studioPrize = studioPrize * 0.80;
            apartmentPrize = apartmentPrize * 0.90;
        }
    } else {
        studioPrize = prizes['studio']['julyOrAugust'] * daysToStay;
        apartmentPrize = prizes['apartment']['julyOrAugust'] * daysToStay;
        if(daysToStay > 14) {
            apartmentPrize = apartmentPrize * 0.90;
        }
    }

    console.log(`Apartment: ${apartmentPrize.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrize.toFixed(2)} lv.`);
}

solve(['June', 14]);