function magicSum(input){
    let [arr, numbersSum] = input;
    let testedArr = arr.split(' ');
    let testArr = testedArr.map(Number);
    numbersSum = Number(numbersSum);
    let len = testArr.length;
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            // console.log(testArr[i] + testArr[j] === numbersSum);
            if(testArr[i] + testArr[j] === numbersSum){
                console.log(`${testedArr[i]} ${testedArr[j]}`);
            }
        }
    }
}

magicSum(['1 7 6 2 19 23', '8']);