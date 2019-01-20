function solve(input) {
    let [stepsNumber, dancersNumber, studyDays] = input.map(Number);
    let stepsProcentPerDay = ((stepsNumber / studyDays) / stepsNumber) * 100;
    stepsProcentPerDay = Math.ceil(stepsProcentPerDay);
    let dancersProcentPerDay;
    if(stepsProcentPerDay <= 13) {
        dancersProcentPerDay = stepsProcentPerDay / dancersNumber;
        console.log(`Yes, they will succeed in that goal! ${dancersProcentPerDay.toFixed(2)}%.`);
    } else {
        dancersProcentPerDay = stepsProcentPerDay / dancersNumber;
        console.log(`No, they will not succeed in that goal! Required ${dancersProcentPerDay.toFixed(2)}% steps to be learned per day.`)
    }
}

solve([55555, 30, 7]);