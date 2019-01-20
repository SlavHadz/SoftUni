function solve(input) {
    let num = Number(input.shift());
    let firstBonus = 0;
    let secondBonus = 0;
    if(num <= 100) {
        firstBonus = 5;
    } else if ( num > 100 && num <= 1000) {
        firstBonus = num * 0.2;
    } else {
        firstBonus = num * 0.1;
    }

    if (num % 2 === 0) {
        secondBonus = 1;
    } else if (num % 10 === 5) {
        secondBonus = 2;
    } else {
        secondBonus = 0;
    }
    console.log(firstBonus + secondBonus);
    console.log(num + firstBonus + secondBonus);
}

solve(['20']);