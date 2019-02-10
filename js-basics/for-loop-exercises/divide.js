function solve(input) {
    let len = +input.shift();
    let p1 = 0,
        p2 = 0,
        p3 = 0;
    for(let i = 0; i < len; i += 1) {
        if(input[i] % 2 == 0) {
            p1 += 1;
        }
        if(input[i] % 3 == 0) {
            p2 += 1;
        }
        if(input[i] % 4 == 0) {
            p3 += 1;
        }
    }
    let p1Procent = ((p1 / len) * 100).toFixed(2);
    let p2Procent = ((p2 / len) * 100).toFixed(2);
    let p3Procent = ((p3 / len) * 100).toFixed(2);
    console.log(`${p1Procent}%`)
    console.log(`${p2Procent}%`)
    console.log(`${p3Procent}%`)
}

solve([]);