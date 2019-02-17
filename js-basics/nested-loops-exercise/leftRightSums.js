function solve(input){
    let [firstNum, secondNum] = input.map(Number);
    let printedLine = '';
    for(let i = firstNum; i <= secondNum; i++) {
        let currentNum = i.toString();
        let firstInt = Number(currentNum[0]);
        let secondInt = Number(currentNum[1]);
        let middleInteger = Number(currentNum[2]);
        let fourthInt = Number(currentNum[3]);
        let fifthInt = Number(currentNum[4]);
        let sumFirst = firstInt + secondInt;
        let sumLast = fourthInt + fifthInt;
        if(sumFirst == sumLast) {
            printedLine += currentNum + ' ';
        } else {
            if(Math.abs(sumFirst - sumLast) == middleInteger) {
                printedLine += currentNum + ' ';
            }
        }
    }
    console.log(printedLine);
}

solve([10000, 10100]);