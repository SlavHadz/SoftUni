function solve(input){
    let num = +input.shift();
    let counter = 0;
    let ticketCombination = '';
    let prize = 0;
    for(let x1 = 66; x1 <= 76; x1 += 2){
        let code1 = String.fromCharCode(x1);
        for(let x2 = 102; x2 >= 97; x2--) {
            let code2 = String.fromCharCode(x2);
            for(let x3 = 65; x3 <= 67; x3++){
                let code3 = String.fromCharCode(x3);
                for(let x4 = 1; x4 <= 10; x4++){
                    for(let x5 = 10; x5 >= 1; x5--){
                        counter += 1;
                        if(counter === num){
                            ticketCombination = `${code1}${code2}${code3}${x4}${x5}`;
                            prize = x1 + x2 + x3 + x4 + x5;
                        }
                    }
                }
            }
        }
    }
    console.log(`Ticket combination: ${ticketCombination}`);
    console.log(`Prize: ${prize} lv.`);
}

solve([2568]);