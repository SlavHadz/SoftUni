function solve(input) {
    let [animal] = input;
    switch (animal) {
        case ('dog'):
            console.log('mammal')
            break;
        case ('crocodile'):
            console.log('reptile')
            break;
        case ('tortoise'):
            console.log('reptile')
            break;
        case ('snake'):
            console.log('reptile')
            break;
        default:
            console.log('unknown');
    }
}

solve(['dog']);