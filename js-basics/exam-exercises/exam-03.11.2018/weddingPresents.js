function weddingPresents(input) {
    let guests = +input.shift();
    let presentsCount = +input.shift();
    let money = 0,
        electrics = 0,
        vaucher = 0,
        other = 0;
    for(let i = 0; i < presentsCount; i++){
        switch (input[i]) {
            case 'A':
                money += 1;
                break;
            case 'B':
                electrics += 1;
                break;
            case 'V':
                vaucher += 1;
                break;
            case 'G':
                other += 1;
                break;
        }
    }
    let moneyProcent = (money / presentsCount) * 100;
    let electricsProcent = (electrics / presentsCount) * 100;
    let vaucherProcent = (vaucher / presentsCount) * 100;
    let otherProcent = (other / presentsCount) * 100;
    let guestsProcent = (presentsCount / guests) * 100;

    console.log(`${moneyProcent.toFixed(2)}%`);
    console.log(`${electricsProcent.toFixed(2)}%`);
    console.log(`${vaucherProcent.toFixed(2)}%`);
    console.log(`${otherProcent.toFixed(2)}%`);
    console.log(`${guestsProcent.toFixed(2)}%`);
}

weddingPresents([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);