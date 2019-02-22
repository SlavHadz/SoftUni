function solve(input) {
    let budget = +input.shift();
    let city = input.shift();
    let nights = +input.shift();
    let table = {
        'Cairo': {
            'prize': 250,
            'tickets': 600
        },
        'Paris': {
            'prize': 150,
            'tickets': 350
        },
        'Lima': {
            'prize': 400,
            'tickets': 850
        },
        'New York': {
            'prize': 300,
            'tickets': 650
        },
        'Tokyo': {
            'prize': 350,
            'tickets': 700
        }
    }
    let hotelPrize = table[city]['prize'] * 2;
    let finalPrize = hotelPrize * nights + table[city]['tickets'];
    if(nights >= 1 && nights <= 4) {
        finalPrize = finalPrize * 0.97;
    } else if(nights >= 5 && nights <= 9) {
        if(city == 'Cairo' || city == 'New York'){
            finalPrize = finalPrize * 0.95;
        } else if(city == 'Paris') {
            finalPrize = finalPrize * 0.93;
        }
    } else if (nights >= 10 && nights <= 24) {
        if(city == 'Cairo') {
            finalPrize = finalPrize * 0.9;
        } else if(city == 'Paris' || city == 'New York' || city == 'Tokyo') {
            finalPrize = finalPrize * 0.88;
        }
    } else if (nights >= 25 && nights <= 49) {
        if(city == 'Tokyo' || city == 'Cairo') {
            finalPrize = finalPrize * 0.83;
        } else if (city == 'New York' || city == 'Lima') {
            finalPrize = finalPrize * 0.81;
        } else if (city == 'Paris') {
            finalPrize = finalPrize * 0.78;
        }
    } else if (nights >= 50) {
        finalPrize = finalPrize * 0.7;
    }

    if(budget >= finalPrize) {
        console.log(`Yes! You have ${(budget - finalPrize).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(finalPrize - budget).toFixed(2)} leva.`);
    }
}

solve([2000, 'Cairo', 1]);