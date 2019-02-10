function solve(input) {
    let numberOfStudents = +input.shift(),
        topStudents = 0,
        secondStudents = 0,
        thirdStudents = 0,
        failedStudents = 0,
        gradesSum = 0;
    let len = input.length;

    for(let i = 0; i < len; i += 1) {
        let studentGrade = Number(input[i]);
        if( studentGrade >= 5.00) {
            topStudents += 1;
        } else if ( studentGrade <= 4.99 && studentGrade >= 4.00) {
            secondStudents += 1;
        } else if ( studentGrade <= 3.99 && studentGrade >= 3.00) {
            thirdStudents += 1;
        } else if (studentGrade < 3.00 && studentGrade > 0) {
            failedStudents += 1;
        }
        gradesSum += studentGrade;
    }

    let topStudentsProcent = ((topStudents / numberOfStudents) * 100).toFixed(2),
        secondStudentsProcent = ((secondStudents / numberOfStudents) * 100).toFixed(2),
        thirdStudentsProcent = ((thirdStudents / numberOfStudents) * 100).toFixed(2),
        failedStudentsProcent = ((failedStudents / numberOfStudents) * 100).toFixed(2),
        averageScore = (gradesSum / numberOfStudents).toFixed(2);
    console.log(`Top students: ${topStudentsProcent}%`);
    console.log(`Between 4.00 and 4.99: ${secondStudentsProcent}%`);
    console.log(`Between 3.00 and 3.99: ${thirdStudentsProcent}%`);
    console.log(`Fail: ${failedStudentsProcent}%`);
    console.log(`Average: ${averageScore}`);
};

solve(['10', '3', '2.99', '5.68', '3.01', '4', '4', '6', '4.5', '2.44', '5']);