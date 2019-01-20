function solve(input) {
    let [income, averageGrade, minimalIncome] = input.map(Number);
    let socialScholarship = Math.floor(minimalIncome * 0.35);
    let gradeScholarship = Math.floor(averageGrade * 25);
    let socialScholarshipAllowed = income < minimalIncome && averageGrade > 4.50;
    let resultScholarshipAllowed = averageGrade >= 5.50;

    if (socialScholarshipAllowed && resultScholarshipAllowed) {
        if(socialScholarship >= gradeScholarship) {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } else {
            console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
        }
    } else if (socialScholarshipAllowed && !resultScholarshipAllowed) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (!socialScholarshipAllowed && resultScholarshipAllowed ) {
        console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

solve(['300.00', '5.65', '220.00']);