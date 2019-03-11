function solve(input){
    let desiredHight = +input.shift();
    let len = input.length;
    let unsuccessfullJumps = 0;
    let isSuccessfull = true;
    let currentHight = desiredHight - 30;
    let numberOfJumps = 0;
    for(let i = 0; i < len; i++){
        let currentJump = +input.shift();
        if(currentJump > currentHight){
            currentHight += 5;
            numberOfJumps += 1;
            unsuccessfullJumps = 0;
        } else {
            numberOfJumps += 1;
            unsuccessfullJumps += 1;
            if(unsuccessfullJumps === 3){
                isSuccessfull = false;
                break;
            }
        }
    }
    if(isSuccessfull){
        console.log(`Tihomir succeeded, he jumped over ${desiredHight}cm after ${numberOfJumps - unsuccessfullJumps} jumps.`);
    } else {
        console.log(`Tihomir failed at ${currentHight}cm after ${numberOfJumps} jumps.`)
    }
}

solve([231, 205, 212, 213, 228, 229, 230, 235]);