function solve(input) {
    let [budget, floorWidth, floorLength, triSide, triHeigth, triPrice, masterPrice] = input.map(Number),
        floorArea = floorWidth * floorLength,
        triangleArea = (triSide * triHeigth) / 2,
        triangleCount = Math.ceil(floorArea / triangleArea) + 5,
        triangleFullPrice = triangleCount * triPrice,
        fullPrice = triangleFullPrice + masterPrice,
        difference = budget - fullPrice;
        if(difference >= 0) {
            console.log(`${difference.toFixed(2)} lv left.`);
        } else {
            console.log(`You'll need ${Math.abs(difference).toFixed(2)} lv more.`);
        }
}

solve([500, 3, 2.5, 0.5, 0.7, 7.80, 100])