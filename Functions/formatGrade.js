function formatGrade(grade) {
    let desc = '';
    let formatedGrade = grade.toFixed(2);

    if (grade < 3) {
        desc = 'Fail';
        formatGrade = 2;
    } else if (grade < 3.50) {
        desc = 'Poor';
    } else if (grade < 4.50) {
        desc = 'Good';
    } else if (grade < 5.50) {
        desc = 'Very Good';
    } else {
        desc = 'Excellent';
    }

    console.log(`${desc} (${formatGrade})`);

}
