function solve(input) {
    let [recordSeconds, distance, speedPerMeter] = input.map(Number);
    let slowedDown = Math.floor(distance / 15) * 12.5;
    let ivanchosTime = distance * speedPerMeter + slowedDown;
    let timeDifference = Math.abs(ivanchosTime - recordSeconds);
    if(recordSeconds <= ivanchosTime) {
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${ivanchosTime.toFixed(2)} seconds.`);
    }
}

solve([10464, 1500, 20]);