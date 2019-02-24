function spaceship(input){
    let [shipWidth, shipLength, shipHeigth, averageHeigth] = input.map(Number);
    let shipCapacity = shipWidth * shipLength * shipHeigth;
    let astronautSpace = 2 * 2 * (averageHeigth + 0.4);
    let astronaust = Math.floor(shipCapacity / astronautSpace);
    if(astronaust >= 3 && astronaust <= 10) {
        console.log(`The spacecraft holds ${astronaust} astronauts.`);
    } else if (astronaust > 10) {
        console.log(`The spacecraft is too big.`);
    } else if (astronaust < 3) {
        console.log(`The spacecraft is too small.`);
    }
}

spaceship([3.5, 4, 5, 1.7]);