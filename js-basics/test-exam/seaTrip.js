function solve(input){
    let [foodMoney, souvenirMoney, hotelMoney] = input.map(Number);
    let fuelCount = (420 / 100) * 7;
    let fuelMoney = fuelCount * 1.85;
    let foodAndSouvenirs = (foodMoney + souvenirMoney) * 3;
    let firstDayHotel = hotelMoney * 0.9;
    let secondDayHotel = hotelMoney * 0.85;
    let thirdDayHotel = hotelMoney * 0.8;
    let result = fuelMoney + foodAndSouvenirs + firstDayHotel + secondDayHotel + thirdDayHotel;
    console.log(`Money needed: ${result.toFixed(2)}`);
}

solve([100, 50, 500]);