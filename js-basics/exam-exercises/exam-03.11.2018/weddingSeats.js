function solve(input) {
    let lastSector = input[0];
    let firstSectorRows = +input[1];
    let oddRowSeets = +input[2];
    let seatsCounter = 0;
    for (let x1 = 'A'.charCodeAt(0); x1 <= lastSector.charCodeAt(0); x1++) {
        let code1 = String.fromCharCode(x1);
        for (let x2 = 1; x2 <= firstSectorRows; x2++) {
            if (x2 % 2 !== 0) {
                for (let x3 = 'a'.charCodeAt(0); x3 < ('a'.charCodeAt(0) + oddRowSeets); x3++) {
                    let code3 = String.fromCharCode(x3);
                    console.log(`${code1}${x2}${code3}`);
                    seatsCounter += 1;
                }
            } else {
                for (let x3 = 'a'.charCodeAt(0); x3 < ('a'.charCodeAt(0) + oddRowSeets + 2); x3++) {
                    let code3 = String.fromCharCode(x3);
                    console.log(`${code1}${x2}${code3}`);
                    seatsCounter += 1;
                }
            }
        }
        firstSectorRows += 1;
    }
    console.log(seatsCounter)
}

solve(['B', '3', '2']);