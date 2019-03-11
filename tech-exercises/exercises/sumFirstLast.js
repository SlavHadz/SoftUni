function solve(input){
    let first = +input.shift();
    let last = +input.pop();
    return first + last;
}

solve(['20', '30', '40']);