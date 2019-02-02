function solve(input) {
    let totalSteps = 0;
    while (totalSteps < 10000) {
        let command = input.shift();
        if (command == 'Going home') {
            totalSteps += Number(input.shift());
            if (totalSteps < 10000) {
                let stepsNeeded = 10000 - totalSteps;
                console.log(`${stepsNeeded} more steps to reach goal.`);
                break;
            } else {
                console.log('Goal reached! Good job!');
                break;
            }
        } else {
            totalSteps += Number(command);
            if (totalSteps >= 10000) {
                console.log('Goal reached! Good job!');
                break;
            }
        }
    }
}

solve([1500, 300, 2500, 3000, 'Going home', 200]);