function souvenirs(input) {
    let team = input.shift();
    let souvenirType = input.shift();
    let count = +input.shift();
    let table = {
        'Argentina': {
            'flags': 3.25,
            'caps': 7.20,
            'posters': 5.10,
            'stickers': 1.25
        },
        'Brazil': {
            'flags': 4.20,
            'caps': 8.50,
            'posters': 5.35,
            'stickers': 1.20
        },
        'Croatia': {
            'flags': 2.75,
            'caps': 6.90,
            'posters': 4.95,
            'stickers': 1.10
        },
        'Denmark': {
            'flags': 3.10,
            'caps': 6.50,
            'posters': 4.80,
            'stickers': 0.90
        }
    }
    if(team != 'Argentina' && team != 'Brazil' && team != 'Croatia' && team != 'Denmark') {
        console.log('Invalid country!');
        return;
    }
    if(souvenirType != 'flags' && souvenirType != 'caps' && souvenirType != 'posters' && souvenirType != 'stickers') {
        console.log('Invalid stock!');
        return;
    }
    let price = table[team][souvenirType];
    let finalPrice = price * count;
    console.log(`Pepi bought ${count} ${souvenirType} of ${team} for ${finalPrice.toFixed(2)} lv.`);
}

souvenirs(['Brazil', 'stickers', '5']);