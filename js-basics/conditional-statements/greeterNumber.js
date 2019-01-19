function solve(input) {
    let [num1, num2] = input.map(Number);
    if(num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

solve(['5', '8']);