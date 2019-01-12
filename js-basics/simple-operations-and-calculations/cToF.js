function celToFar(input) {
    let celsius = +input.shift();
    let farenheit = (celsius * 1.8) + 32;
    console.log(farenheit.toFixed(2));
}

celToFar([25]);