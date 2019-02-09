function solve(input) {
    let word = input[0],
        len = word.length,
        sum = 0;
    for (let i = 0; i < len; i += 1) {
        let letter = word[i];
        switch (letter) {
            case ('a'):
                sum += 1;
                break;
            case ('e'):
                sum += 2;
                break;
            case ('i'):
                sum += 3;
                break;
            case ('o'):
                sum += 4;
                break;
            case ('u'):
                sum += 5;
                break;
        }
    }
    console.log(sum);
}

solve(['hello']);