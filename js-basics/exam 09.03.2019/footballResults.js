function solve(input){
    let wins = 0;
    let draws = 0;
    let loses = 0;
    let len = input.length;
    for(let i = 0; i < len; i++){
        let homeGoals = +input[i][0];
        let awayGoals = +input[i][2];
        if(homeGoals > awayGoals){
            wins += 1;
        } else if (homeGoals == awayGoals){
            draws += 1;
        } else if (homeGoals < awayGoals){
            loses += 1;
        }
    }
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`);
}

solve(['3:1', '0:2', '0:0']);