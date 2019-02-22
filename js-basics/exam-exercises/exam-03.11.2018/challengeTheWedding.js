function challenge(input){
    let [men, women, tables] = input.map(Number);
    let counter = 0;
    let printedLine = '';
    for(let m = 1; m <= men; m++) {
        for(let w = 1; w <= women; w++) {
            counter += 1;
            printedLine += `(${m} <-> ${w}) `;
            if(counter == tables) {
                console.log(printedLine);
                return;
            }
        }
    }
    console.log(printedLine);
}

challenge([2, 2, 3]);