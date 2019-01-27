function solve(input){
    let [examHours, examMins, arrivalHours, arrivalMins] = input.map(Number);
    let examTime = examHours * 60 + examMins;
    let arrivalTime = arrivalHours * 60 + arrivalMins;
    let timeDifference = examTime - arrivalTime;
    if(timeDifference < 0) {
        console.log('Late');
    } else if (timeDifference >= 0 && timeDifference <= 30) {
        console.log('On time');
    } else {
        console.log('Early');
    }

    if(timeDifference > 0 && timeDifference < 60) {
        console.log(`${timeDifference} minutes before the start`)
    } else if (timeDifference >= 60) {
        let hours = Math.floor(timeDifference / 60);
        let mins = timeDifference % 60;
        mins = mins.toString().padStart(2, 0);
        console.log(`${hours}:${mins} hours before the start`);
    } else if(timeDifference < 0 && timeDifference > -60) {
        timeDifference = Math.abs(timeDifference);
        console.log(`${timeDifference} minutes after the start`)
    } else {
        timeDifference = Math.abs(timeDifference);
        let hours = Math.floor(timeDifference / 60);
        let mins = timeDifference % 60;
        mins = mins.toString().padStart(2, 0);
        console.log(`${hours}:${mins} hours after the start`);
    }
}

solve([9, 30, 8, 25]);