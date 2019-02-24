function bus(input){
    let passengers = +input.shift();
    let stops = +input.shift();
    for(let i = 1; i <= stops; i++) {
        let passengersOut = +input.shift();
        let passengersIn = +input.shift();
        passengers -= passengersOut;
        passengers += passengersIn;
        if( i % 2 === 0) {
            passengers -= 2;
        } else {
            passengers += 2;
        }
    }
    console.log(`The final number of passengers is : ${passengers}`);
}

bus([20, 2, 10, 5, 5, 3]);