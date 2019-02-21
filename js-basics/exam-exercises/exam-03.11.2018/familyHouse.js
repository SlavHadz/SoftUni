function solve(input) {
    let months = +input.shift();
    let electricityBills = input.reduce((a, b) => {
        // otherCosts += (b + 20 + 15) * 1.2;
        return a + Number(b);
    }, 0);
    let waterBills = 20 * months;
    let internetBills = 15 * months;
    let otherCosts = (electricityBills + waterBills + internetBills) * 1.2;
    console.log(`Electricity: ${electricityBills.toFixed(2)} lv`);
    console.log(`Water: ${waterBills.toFixed(2)} lv`);
    console.log(`Internet: ${internetBills.toFixed(2)} lv`);
    console.log(`Other: ${otherCosts.toFixed(2)} lv`);
    console.log(`Average: ${((electricityBills + waterBills + internetBills + otherCosts) / months).toFixed(2)} lv`);
}

solve(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);