function solve(input) {
    let age = +input[0];
    let sex = input[1];

    if(age >= 16) {
        if(sex === 'f') {
            console.log('Ms.');
        } else {
            console.log('Mr.');
        }
    } else {
        if(sex === 'f') {
            console.log('Miss');
        } else {
            console.log('Master');
        }
    }
}

solve(['12', 'f']);