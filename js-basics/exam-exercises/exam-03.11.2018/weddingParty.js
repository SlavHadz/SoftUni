function solve(input){
    let [guests, budget] = input.map(Number);
    let prize = guests * 20;
    if(prize >= budget) {
        let difference = prize - budget;
        console.log(`They won't have enough money to pay the covert. They will need ${difference.toFixed()} lv more.`)
    } else {
        let difference = budget - prize;
        let fireworks = difference * 0.4;
        let donation = difference * 0.6;
        console.log(`Yes! ${fireworks.toFixed()} lv are for fireworks and ${donation.toFixed()} lv are for donation.`);
    }
}

solve([10, 150]);