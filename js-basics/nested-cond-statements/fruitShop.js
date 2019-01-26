function solve(input) {
    let fruit = input.shift().toLowerCase();
    let day = input.shift().toLowerCase();
    let quantity = +input.shift();
    let partOftheWeek;
    let prizes = {
        workDays: {
            banana: 2.50,
            apple: 1.20,
            orange: 0.85,
            grapefruit: 1.45,
            kiwi: 2.70,
            pineapple: 5.50,
            grapes: 3.85
        },
        weekend: {
            banana: 2.70,
            apple: 1.25,
            orange: 0.90,
            grapefruit: 1.60,
            kiwi: 3.00,
            pineapple: 5.60,
            grapes: 4.20
        }
    }

    if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {
        partOftheWeek = 'workDays';
    } else if ( day == 'sunday' || day == 'saturday') {
        partOftheWeek = 'weekend'
    } else {
        partOftheWeek = null;
    }

    if(!partOftheWeek) {
        console.log('error');
        return;
    }

    let finalPrize = prizes[partOftheWeek][fruit] * quantity;
    if(isNaN(finalPrize)) {
        console.log('error')
        return;
    };
    console.log(finalPrize);
}

solve(['tomato', 'Monday', '2']);