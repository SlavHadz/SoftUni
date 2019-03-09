function solve(input) {
    let tournamentName = input.shift();
    let allGames = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    while(tournamentName !== 'End of tournaments'){
        let games = +input.shift();
        allGames += games;
        for(let i = 1; i <= games; i++){
            let desiPoints = +input.shift();
            let rivalPoints = +input.shift();
            if(desiPoints > rivalPoints) {
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${desiPoints - rivalPoints} points.`);
                gamesWon += 1;
            } else {
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${rivalPoints - desiPoints} points.`);
                gamesLost += 1;
            }
        }
        tournamentName = input.shift();
    }
    let procentWon = (gamesWon / allGames) * 100;
    let procentLost = (gamesLost / allGames) * 100;
    console.log(`${procentWon.toFixed(2)}% matches win`);
    console.log(`${procentLost.toFixed(2)}% matches lost`);
}

solve([])