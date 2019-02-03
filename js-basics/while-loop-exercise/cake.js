function solve(input) {

    let width = +input.shift();
    let length = +input.shift();
    let cakeSize = width * length;
    let piecesTaken = input.shift();
    let allTakenPieces = 0;
    while(piecesTaken !== 'STOP') {
        allTakenPieces += Number(piecesTaken);
        if(allTakenPieces > cakeSize) {
            console.log(`No more cake left! You need ${allTakenPieces - cakeSize} pieces more.`);
            return;
        }
        piecesTaken = input.shift();
    }
    console.log(`${cakeSize - allTakenPieces} pieces are left.`);
}

solve([10, 2, 2, 4, 6, 'STOP']);