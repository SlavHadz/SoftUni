function solve(input) {
    let [num] = input.map(Number);
    if(num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

solve(['6']);