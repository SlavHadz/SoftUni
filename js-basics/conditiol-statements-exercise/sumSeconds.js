function solve(input) {
    let [first, second, third] = input.map(Number);
    let fullTime = first + second + third;
    let mins = Math.floor(fullTime / 60);
    let secs = (fullTime % 60).toString().padStart(2, '0');
    console.log(`${mins}:${secs}`)
}

solve([35, 45, 44]);