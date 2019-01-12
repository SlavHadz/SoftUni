function birthday(input) {
    let long = +input.shift(),
        width = +input.shift(),
        height = +input.shift(),
        procent = (+input.shift()) * 0.01;
    let capacity = (long * width * height) * 0.001,
        liters = capacity - (capacity * procent);
    console.log(liters.toFixed(3));
}

birthday([85, 75, 47, 17]);