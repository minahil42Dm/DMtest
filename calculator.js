function calculateAverage(marks) {
    if (marks.length === 0) {
        return 0;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);

    return total / marks.length;
}

function getGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";

    return "F";
}

module.exports = {
    calculateAverage,
    getGrade
};