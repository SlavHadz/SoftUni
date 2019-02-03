function solve(input) {
    let money = (+input.shift() * 100).toFixed();
    let coins = 0;
    while(money > 0) {
        if(money >= 200) {
            money -= 200;
            coins += 1;
        } else if ( money >= 100) {
            money -= 100;
            coins += 1;
        } else if ( money >= 50) {
            money -= 50;
            coins += 1;
        } else if(money >= 20) {
            money -= 20;
            coins += 1;
        } else if(money >= 10) {
            money -= 10;
            coins += 1;
        } else if(money >= 5) {
            money -= 5;
            coins += 1;
        } else if(money >= 2) {
            money -= 2;
            coins += 1;
        } else if(money >= 1) {
            money -= 1;
            coins += 1;
        }
    }
    console.log(coins);
}

solve([32.59]);