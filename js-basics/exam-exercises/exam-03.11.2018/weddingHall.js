function solve(input){
    let [hallLength, hallWidth, barSide] = input.map(Number);
    let hallArea = hallLength * hallWidth;
    let barArea = barSide * barSide;
    let dancingArea = hallArea * 0.19;
    let freeArea = hallArea - barArea - dancingArea;
    let guests = Math.ceil(freeArea / 3.2);
    console.log(guests);
}

solve([50, 25, 2]);