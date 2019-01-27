function solve(input) {
    let yearType = input.shift(),
        holydays = +input.shift(),
        homeWeekends = +input.shift();
    let isLeap = yearType == 'leap' ? true : false;
    let playedInSofia = (48 - homeWeekends) * 0.75;
    let timesPlayed = homeWeekends + playedInSofia + (holydays * (2 / 3));
    if(isLeap) {
        timesPlayed = timesPlayed * 1.15;
    }
    console.log(Math.floor(timesPlayed));
}

solve(['leap', '40', '10']);