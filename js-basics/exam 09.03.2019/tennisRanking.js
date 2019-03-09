function solve(input){
    let tournaments = +input.shift();
    let startingPoints = +input.shift();
    let tournamentPoints = 0;
    let toursWon = 0;
    for(let i = 0; i < tournaments; i++){
        let stage = input.shift();
        switch (stage){
            case ('W'):
                tournamentPoints += 2000;
                toursWon += 1;
                break;
            case ('F'):
                tournamentPoints += 1200;
                break;
            case ('SF'):
                tournamentPoints += 720;
                break;
        }
    }
    let fullPoints = startingPoints + tournamentPoints;
    let averagePoints = tournamentPoints / tournaments;
    let averageWins = (toursWon / tournaments) * 100;
    console.log(`Final points: ${fullPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${averageWins.toFixed(2)}%`);
}

solve([5, 1400, 'F', 'SF', 'W', 'W', 'SF']);