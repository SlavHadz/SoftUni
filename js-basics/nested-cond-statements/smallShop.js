function solve(input) {
    let [product, city, quantity] = input;

    cityPrizes = {
        'Sofia': {
            'coffee': 0.5,
            'water': 0.8,
            'beer': 1.2,
            'sweets': 1.45,
            'peanuts': 1.6
        },
        'Plovdiv': {
            'coffee': 0.4,
            'water': 0.7,
            'beer': 1.15,
            'sweets': 1.3,
            'peanuts': 1.5
        },
        'Varna': {
            'coffee': 0.45,
            'water': 0.7,
            'beer': 1.1,
            'sweets': 1.35,
            'peanuts': 1.55
        },
    }

    let finalPrize = cityPrizes[city][product] * +quantity;
    console.log(finalPrize);
}

solve(['coffee', 'Varna', '2']);