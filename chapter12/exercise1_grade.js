export function calculateGrade(mark) {

    if (mark >= 80) {
        return "A+";
    }
    else if (mark >= 70) {
        return "A";
    }
    else if (mark >= 60) {
        return "B";
    }
    else {
        return "Fail";
    }

}