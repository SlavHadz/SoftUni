function salary(input) {
    let tabs = +input.shift();
    let salary = input.shift();
    for (let i = 0; i < tabs; i += 1) {
        switch (input[i]) {
            case ('Facebook'):
                salary -= 150;
                break;
            case ('Instagram'):
                salary -= 100;
                break;
            case ('Reddit'):
                salary -= 50;
                break;
        }
        if(salary <= 0){
            console.log('You have lost your salary.');
            return;
        }
    }
    console.log(salary);
}

salary()