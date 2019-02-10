function solve(input) {
    let len = input.shift();
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for(let i = 0; i < len; i += 1) {
        if(input[i] < 200) {
            p1 += 1;
        } else if(input[i] >= 200 && input[i] <= 399) {
            p2 += 1;
        } else if(input[i] >= 400 && input[i] <= 599) {
            p3 += 1;
        } else if(input[i] >= 600 && input[i] <= 799) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }

    let p1Procent = ((p1 / len) * 100).toFixed(2);
    console.log(`${p1Procent}%`);
    let p2Procent = ((p2 / len) * 100).toFixed(2);
    console.log(`${p2Procent}%`);
    let p3Procent = ((p3 / len) * 100).toFixed(2);
    console.log(`${p3Procent}%`);
    let p4Procent = ((p4 / len) * 100).toFixed(2);
    console.log(`${p4Procent}%`);
    let p5Procent = ((p5 / len) * 100).toFixed(2);
    console.log(`${p5Procent}%`);
}

solve([3, 999, 1, 2]);