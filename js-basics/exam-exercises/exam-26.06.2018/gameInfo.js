function solve(input){
    let teamName = input.shift();
    let gamesPlayed = +input.shift();
    let minutesTotal = 0;
    let penaltyGames = 0;
    let extraTimeGames = 0;
    for(let i = 0; i < gamesPlayed; i++) {
        let gameMinutes = +input.shift();
        minutesTotal += gameMinutes;
        if(gameMinutes > 90 && gameMinutes <= 120) {
            extraTimeGames += 1;
        } else if(gameMinutes > 120) {
            penaltyGames += 1;
        }
    }
    averageMinutes = minutesTotal / gamesPlayed;
    console.log(`${teamName} has played ${minutesTotal} minutes. Average minutes per game: ${averageMinutes.toFixed(2)}`);
    console.log(`Games with penalties: ${penaltyGames}`);
    console.log(`Games with additional time: ${extraTimeGames}`);
}

solve(['England', 3, 95, 115, 123]);