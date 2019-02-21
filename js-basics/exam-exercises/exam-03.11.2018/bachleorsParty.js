function solve(input){
    let performerPrize = +input.shift();
    let group = input.shift();
    let totalIncome = 0;
    let totalGuests = 0;
    while(group !== 'The restaurant is full') {
        group = Number(group);
        let guestPrize = group >= 5 ? 70 : 100;
        totalIncome += (guestPrize * group);
        totalGuests += group;
        group = input.shift();
    }
    if(totalIncome >= performerPrize) {
        console.log(`You have ${totalGuests} guests and ${totalIncome - performerPrize} leva left.`);
    } else {
        console.log(`You have ${totalGuests} guests and ${totalIncome} leva income, but no singer.`);
    }
}

solve([2800, 5, 5, 4, 6, 6, 12, 12, 'The restaurant is full']);