function nums(input){
    let resultArr = [];
    input.forEach(num => {
        if(num < 0) {
            resultArr.unshift(num);
        } else {
            resultArr.push(num);
        }
    });
    resultArr.forEach(el => console.log(el));
}

nums([7, -2, 8, 9]);