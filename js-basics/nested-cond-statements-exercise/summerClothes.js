function solve(input) {
    let degrees = Number(input.shift());
    let dayTime = input.shift();
    let weather;
    let table = {
        'Morning': {
            'cold': {
                outfit: 'Sweatshirt',
                shoes: 'Sneakers'
            },
            'warm': {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            'hot': {
                outfit: 'T-Shirt',
                shoes: 'Sandals'
            }
        },
        'Afternoon': {
            'cold': {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            'warm': {
                outfit: 'T-Shirt',
                shoes: 'Sandals'
            },
            'hot': {
                outfit: 'Swim Suit',
                shoes: 'Barefoot'
            }
        },
        'Evening': {
            'cold': {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            'warm': {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            'hot': {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            }
        }
    }

    if(degrees >= 10 && degrees <= 18) {
        weather = 'cold'
    } else if (degrees > 18 && degrees <= 24) {
        weather = 'warm';
    } else if (degrees >= 25) {
        weather = 'hot';
    } else {
        console.log('too cold to go outside');
    }

    let clothes = table[dayTime][weather];
    console.log(`It's ${degrees} degrees, get your ${clothes.outfit} and ${clothes.shoes}.`)
}

solve(['16', 'Morning'])