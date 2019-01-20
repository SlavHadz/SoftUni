function solve(input) {
    let [broA, broB, broC, fishingTime] = input.map(Number);
    let broAPart = 1 / broA,
        broBPart = 1 / broB,
        broCPart = 1 / broC,
        time = 1 / (broAPart + broBPart + broCPart);
    let timeTogether = time * 1.15;
    console.log(`Cleaning time: ${timeTogether.toFixed(2)}`)
    let timeDifference = Math.abs(timeTogether - fishingTime);
    if(fishingTime >= timeTogether)  {
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(timeDifference)} hours.`);
    } else {
        console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(timeDifference)} hours.`)
    }
}

solve([3, 4, 5, 3.6]);