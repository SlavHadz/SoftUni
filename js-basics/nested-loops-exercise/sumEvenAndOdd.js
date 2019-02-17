function solve(input) {
    let [firstNum, secondNum] = input.map(Number);
    let printedLine = '';
    for(let i = firstNum; i <= secondNum; i++) {
        let currentNum = i.toString();
        let evenSum = 0;
        let oddSum = 0;
        for(let integer = 1; integer <= currentNum.length; integer++) {
            if(integer % 2 == 0) {
                evenSum += Number(currentNum[integer - 1]);
            } else {
                oddSum += Number(currentNum[integer - 1]);
            }
        }
        if(evenSum === oddSum){
            printedLine += currentNum + ' ';
        }
    }
    console.log(printedLine);
}

solve([100000, 100050]);
