function substitute(input){
    let [K, L, M, N] = input.map(Number);
    counter = 0;
    for(let x1 = K; x1 <= 8; x1 += 1){
        if(x1 % 2 != 0){
            continue;
        }
        for(let x2 = 9; x2 >= L; x2 -= 1){
            if(x2 % 2 == 0) {
                continue;
            }
            for(let x3 = M; x3 <= 8; x3 += 1) {
                if(x3 % 2 != 0){
                    continue;
                }
                for(let x4 = 9; x4 >= N; x4 -= 1){
                    if(x4 % 2 == 0){
                        continue;
                    }
                    if(`${x1}${x2}` == `${x3}${x4}`) {
                        console.log("Cannot change the same player.");
                    } else {
                        console.log(`${x1}${x2} - ${x3}${x4}`);
                        counter += 1;
                    }
                    if (counter == 6){
                        return;
                    }
                }
            }
        }
    }
}

substitute([7, 6, 8, 5]);