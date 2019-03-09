function solve(input){
    let name = input.shift();
    let field = input.shift();
    let allPoints = 301;
    let goodShots = 0;
    let badShots = 0;
    let wonTheGame = true;
    while(allPoints !== 0) {
        if(field == 'Retire') {
            wonTheGame = false;
            break;
        }
        let shotPoints = +input.shift();
        switch (field) {
            case 'Single':
                shotPoints *= 1;
                break;
            case 'Double':
                shotPoints *= 2;
                break;
            case 'Triple':
                shotPoints *= 3;
                break;
        }
        allPoints -= shotPoints;
        if(allPoints < 0) {
            allPoints += shotPoints;
            badShots += 1;
        } else {
            goodShots += 1;
        }
        field = input.shift();
    }

    if(wonTheGame){
        console.log(`${name} won the leg with ${goodShots} shots.`);
    } else {
        console.log(`${name} retired after ${badShots} unsuccessful shots.`);
    }
}

solve(['Michael van Gerwen', 'Triple', 20, 'Triple', 19, 'Double', 10, 'Single', 3, 'Single', 1, 'Triple', 20, 'Triple', 20, 'Double', 20]);