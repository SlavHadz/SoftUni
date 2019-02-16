function solve(input) {
    let destination = input.shift();
    // let destination = +input.shift();
    // for(let i = 0; i < neededMoney; i += savedMoney) {
    //     let savedMoney = +input.shift();
    // }
    while(destination !== 'End') {
        let neededMoney = +input.shift();
        let savedMoney = 0;
        while (savedMoney < neededMoney) {
            let saving = +input.shift();
            savedMoney += saving;
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
    }
}

solve(['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End']);