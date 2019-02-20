function solve(input){
    let teamName = input.shift();
    let gamesCount = +input.shift();
    let totalGoalsScored = 0;
    let totalGoalsConceded = 0;
    let points = 0;
    for(let i = 0; i < gamesCount; i++) {
        let scored = +input.shift();
        let conceded = +input.shift();
        if(scored > conceded) {
            points += 3;
        } else if(scored === conceded) {
            points += 1;
        }
        totalGoalsScored += scored;
        totalGoalsConceded += conceded;
    }
    if(totalGoalsScored >= totalGoalsConceded) {
        console.log(`${teamName} has finished the group phase with ${points} points.`);
    } else {
        console.log(`${teamName} has been eliminated from the group phase.`);
    }
    console.log(`Goal difference: ${totalGoalsScored - totalGoalsConceded}.`);
}

solve(['Germany', 2, 0, 2, 1, 3]);