function solve(input) {
    let payments = +input.shift();
    let account = 0;
    let counter = 1;
    while(counter <= payments) {
        let money = +input.shift();
        if(money < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        account += money;
        counter += 1;
    }
    console.log(`Total: ${account.toFixed(2)}`);
}

solve([3, 5.51, 69.42, 100]);