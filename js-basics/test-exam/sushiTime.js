function sushiTime(input) {
    let sushiType = input.shift();
    let restaurantName = input.shift();
    let portions = +input.shift();
    let homeDelivery = input.shift();
    let delivery = 0;
    let table = {
        'Sushi Zone': {
            'sashimi': 4.99 ,
            'maki': 5.29,
            'uramaki': 5.99,
            'temaki': 4.29
        },
        'Sushi Time': {
            'sashimi': 5.49 ,
            'maki': 4.69,
            'uramaki': 4.49,
            'temaki': 5.19
        },
        'Sushi Bar': {
            'sashimi': 5.25,
            'maki': 5.55,
            'uramaki': 6.25,
            'temaki': 4.75
        },
        'Asian Pub': {
            'sashimi': 4.50,
            'maki': 4.80,
            'uramaki': 5.50,
            'temaki': 5.50
        }
    }

    if(restaurantName != 'Sushi Zone' && restaurantName != 'Sushi Time' && restaurantName != 'Sushi Bar' && restaurantName != 'Asian Pub') {
        console.log(`${restaurantName} is invalid restaurant!`);
        return;
    }

    let prize = table[restaurantName][sushiType];
    let fullPrize = prize * portions;
    if(homeDelivery == 'Y'){
        delivery = fullPrize * 0.2;
    } else {
        delivery = 0;
    }

    fullPrize += delivery;
    console.log(`Total price: ${Math.ceil(fullPrize)} lv.`);
}

sushiTime(['maki', 'Sushi House', 4, 'Y']);