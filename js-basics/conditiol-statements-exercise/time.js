function solve(input) {
    let [startH, startMin] = input.map(Number);
    let mins = startMin + 15;
    let hours = startH;
    if(mins >= 60) {
        mins -= 60;
        hours += 1;
    }
    if(hours >= 24) {
        hours -= 24;
    }
    mins = mins.toString().padStart(2, '0');
    console.log(`${hours}:${mins}`);
}

solve(['1', '46']);