function solve(input) {
    let name = input.shift();
    let biggestValue = Number.MIN_SAFE_INTEGER;
    let biggestValueName = name;
    while(name !== 'STOP') {
        let len = name.length;
        let nameValue = 0;
        for( let i = 0; i < len; i += 1) {
            letterValue = name.charCodeAt(i);
            nameValue += letterValue;
        }
        if(nameValue > biggestValue) {
            biggestValue = nameValue;
            biggestValueName = name;
        }
        name = input.shift();
    }
    console.log(`Winner is ${biggestValueName} - ${biggestValue}!`);
}

solve(['Petar', 'Georgi', 'Stanimir', 'STOP']);