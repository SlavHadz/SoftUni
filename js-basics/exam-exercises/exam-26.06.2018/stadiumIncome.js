function solve(input){
    let [sectors, capacity, ticketPrize] = input.map(Number);
    let fullIncome = capacity * ticketPrize;
    let sectorIncome = fullIncome / sectors;
    let charity = (fullIncome - (sectorIncome * 0.75)) / 8;
    console.log(`Total income - ${fullIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${charity.toFixed(2)} BGN`);
}

solve([4, 5000, 5]);