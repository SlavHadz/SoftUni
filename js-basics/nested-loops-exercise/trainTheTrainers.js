function solve(input) {
    let juryMembers = +input.shift();
    let presentationName = input.shift();
    let allAssesmSum = 0;
    let presentationsCount = 0;
    while(presentationName !== 'Finish'){
        let assesmentSum = 0;
        for(let i = 0; i < juryMembers; i++) {
            let presentationAssesm = +input.shift();
            assesmentSum += presentationAssesm;
            allAssesmSum += presentationAssesm;
            presentationsCount += 1;
        }
        let averageAssesm = (assesmentSum / juryMembers).toFixed(2);
        console.log(`${presentationName} - ${averageAssesm}.`);
        presentationName = input.shift();
        assesmentSum = 0;
    }
    let finalAssesment = allAssesmSum / presentationsCount;
    console.log(`Student's final assessment is ${(finalAssesment).toFixed(2)}.`);
}

solve([3, "Arrays", 4.53, 5.23, 5.00, "For loop", 5.83, 6.00, 5.42, "Finish"]);