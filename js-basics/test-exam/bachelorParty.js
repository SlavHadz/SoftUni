function party(input){
    let performerPrice = +input.shift();
    let group = input.shift();
    let fullPrice = 0;
    let guestsCount= 0;
    while(group != 'The restaurant is full'){
        group = Number(group);
        let groupPrice = 0;
        if(group >= 5) {
            groupPrice = group * 70;
        } else {
            groupPrice = group * 100;
        }
        fullPrice += groupPrice;
        guestsCount += group;
        group = input.shift();
    }

    let afterPerformerTax = fullPrice - performerPrice;
    if(afterPerformerTax >= 0) {
        console.log(`You have ${guestsCount} guests and ${afterPerformerTax} leva left.`);
    } else {
        console.log(`You have ${guestsCount} guests and ${fullPrice} leva income, but no singer.`);
    }
}

party([])