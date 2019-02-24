function fanShop(input){
    let budget = +input.shift();
    let count = +input.shift();
    let table = {
        'hoodie': 30,
        'keychain': 4,
        'T-shirt': 20,
        'flag': 15,
        'sticker': 1
    }
    for(let i = 0; i < count; i++){
        let articule = input.shift();
        let price = table[articule];
        budget -= price;
    }

    if(budget >= 0) {
        console.log(`You bought ${count} items and left with ${budget} lv.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(budget)} more lv.`);
    }
}

fanShop([5, 2, 'hoodie', 'hoodie']);