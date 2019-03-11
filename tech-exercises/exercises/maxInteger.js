function maxNumbers(input){
    let len = input.length;
    let resultArr = [];
    for(let i = 0; i < len; i++){
        let currentArr = input.slice(i, len);
        let isBiggest = true;
        currentArr.map((num, index) => {
            if(currentArr[0] <= num && index !== 0){
                isBiggest = false;
            }
        })
        if(isBiggest){
            resultArr.push(currentArr[0]);
        }
    }
    let result = resultArr.join(' ');
    console.log(result);
}

maxNumbers([14, 24, 3, 19, 15, 17]);