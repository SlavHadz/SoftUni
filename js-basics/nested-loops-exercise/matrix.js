function solve(input) {
    let [a, b, c, d] = input.map(Number);
    for(let i = a; i <= b; i += 1) {
        for(let j = a; j <= b; j += 1) {
            for(let y = c; y <= d; y += 1) {
                for(let z = c; z <= d; z += 1) {
                    if((i + z == j + y) && i !== j && y !== z ) {
                        console.log(`${i}${j}`);
                        console.log(`${y}${z}`);
                        console.log('');
                    }
                }
            }
        }
    }
}

solve([1, 2, 3, 4]);