function solve(input){
    let [mins, playerName] = input;
    mins = Number(mins);
    if(mins == 0) {
        console.log('Match has just began!');
    } else if ( mins > 0 && mins < 45) {
        console.log('First half time.');
    } else if (mins >= 45) {
        console.log('Second half time.');
    }

    if(mins >= 1 && mins <= 10) {
        console.log(`${playerName} missed a penalty.`);
        if(mins % 2 == 0) {
            console.log(`${playerName} was injured after the penalty.`);
        }
    } else if (mins > 10 && mins <= 35) {
        console.log(`${playerName} received yellow card.`);
        if(mins % 2 != 0) {
            console.log(`${playerName} got another yellow card.`);
        }
    } else if (mins > 35 && mins < 45) {
        console.log(`${playerName} SCORED A GOAL !!!`);
    } else if (mins > 45 && mins <= 55) {
        console.log(`${playerName} got a freekick.`);
        if(mins % 2 == 0) {
            console.log(`${playerName} missed the freekick.`);
        }
    } else if (mins > 55 && mins <= 80) {
        console.log(`${playerName} missed a shot from corner.`);
        if(mins % 2 != 0) {
            console.log(`${playerName} has been changed with another player.`);
        }
    } else if (mins > 80 && mins <= 90) {
        console.log(`${playerName} SCORED A GOAL FROM PENALTY !!!`);
    }
}

solve([10, 'Messi']);