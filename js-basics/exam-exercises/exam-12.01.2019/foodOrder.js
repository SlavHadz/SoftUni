function solve(input) {
    let budget = +input.shift();
    let product = input.shift();
    let itemsCount = 0;
    let orderPrice = 2.50;
    while(product !== 'Order') {
        let price = +input.shift();
        let updatedPrice = orderPrice + price;
        if(updatedPrice > budget) {
            console.log('You will exceed the budget if you order this!');
            product = input.shift();
        } else {
            orderPrice = updatedPrice;
            itemsCount += 1;
            product = input.shift();
        }
    }
    console.log(`You ordered ${itemsCount} items!`);
    console.log(`Total: ${orderPrice.toFixed(2)}`);
}

solve([25.00, 'Soup', 3.50, 'Salad', 7.80, 'Fish', 9.00, 'Cake', 5.00, 'Ice cream', 2.00, 'Order'])