function solve(input){
    let [contractTime, contractType, desertAdded, months] = input;
    let table = {
        'one': {
            'Small': 9.98,
            'Middle': 18.99,
            'Large': 25.98,
            'ExtraLarge':   35.99
        },
        'two': {
            'Small': 8.58,
            'Middle': 17.09,
            'Large': 23.59,
            'ExtraLarge':   31.79
        }
    }
    let monthlyTax = table[contractTime][contractType];
    if(desertAdded === 'yes'){
        if(monthlyTax <= 10) {
            monthlyTax += 5.50;
        } else if(monthlyTax > 10 && monthlyTax <= 30){
            monthlyTax += 4.35;
        } else if(monthlyTax > 30) {
            monthlyTax += 3.85;
        }
    }
    if(contractTime === 'two') {
        monthlyTax -= monthlyTax * 0.0375;
    }
    let finalSum = monthlyTax * Number(months);
    console.log(`${finalSum.toFixed(2)} lv.`)
}

solve(['two', 'Large', 'no', 10]);