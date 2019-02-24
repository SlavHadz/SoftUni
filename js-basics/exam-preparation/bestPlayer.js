function bestPlayer(input) {
    let player = input.shift();
    let maxGoals = 0;
    let bestPlayer = '';
    while(player != 'END') {
        let goals = +input.shift();
        if(maxGoals < goals) {
            maxGoals = goals;
            bestPlayer = player;
            if(maxGoals >= 10) {
                break;
            }
        }
        player = input.shift();
    }
    console.log(`${bestPlayer} is the best player!`);
    if(maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

bestPlayer(['Silva', '5', 'Harry Kane', '10']);