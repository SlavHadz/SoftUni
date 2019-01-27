function solve(input) {
    let budget = +input.shift();
    let season = input.shift();
    let prize = 0;
    let vacaType = '';
    let place = '';

    if(budget <= 100) {
        prize = season == 'summer' ? budget * 0.3 : budget * 0.7;
        vacaType = season == 'summer' ? 'Camp' : 'Hotel';
        place = 'Bulgaria';
    } else if (budget > 100 && budget <= 1000) {
        prize = season == 'summer' ? budget * 0.4 : budget * 0.8;
        vacaType = season == 'summer' ? 'Camp' : 'Hotel';
        place = 'Balkans'
    } else {
        prize = budget * 0.9;
        vacaType = 'Hotel';
        place = 'Europe';
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${vacaType} - ${prize.toFixed(2)}`)
}

solve([50, 'summer'])