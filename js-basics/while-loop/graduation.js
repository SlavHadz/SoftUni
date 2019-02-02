function solve(input) {
    let name = input.shift();
    let counter = 1,
        sum = 0;
        excluded = 0;
        isExcluded = false;
    while (counter <= 12) {
        let grade = +input.shift();
        if(grade < 4.00) {
            excluded += 1;
        }
        if(grade >= 4.00) {
            sum += grade;
            counter += 1;
        }
        if(excluded == 2) {
            isExcluded = true;
            break;
        }
    }
    if(isExcluded) {
        console.log(` ${name} has been excluded at ${counter} grade`)
    } else {
        finalGrade = sum / 12;
        console.log(`${name} graduated. Average grade: ${finalGrade.toFixed(2)}`);
    }
}

solve(['Gosho', 5, 4, 5, 4, 5, 4, 5, 4, 3, 4, 4, 5, 3]);