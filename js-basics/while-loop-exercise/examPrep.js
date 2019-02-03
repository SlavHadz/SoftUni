function solve(input) {
    let [badGradesLimit, ...exercises] = input,
        badGradesCount = 0,
        exercisesCount = 0;
        gradesSum = 0;
        limitReached = false,
        lastProblem = '';
    while(!limitReached) {
        let exerciseName = exercises.shift();
        let exerciseGrade = +exercises.shift();
        if(exerciseName == 'Enough') {
            break;
        }
        if(exerciseGrade <= 4.0) {
            badGradesCount += 1;
            if(badGradesCount == badGradesLimit) {
                console.log(`You need a break, ${badGradesCount} poor grades.`);
                limitReached = true;
                break;
            }
        }
        exercisesCount += 1;
        gradesSum += exerciseGrade;
        lastProblem = exerciseName;
    }
    if(!limitReached) {
        console.log(`Average score: ${(gradesSum / exercisesCount).toFixed(2)}`);
        console.log(`Number of problems: ${exercisesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

solve([3, 'Money', 6, 'Story', 4, 'Spring time', 5, 'Bus', 6, 'Enough']);