const fullName = "Oskar Romanowicz";
const studentID = 49374;

console.log(`My name is ${fullName}. My student ID is ${studentID}`);

const getStudentFullName = () => {
    switch (id) {
        case 0:
            return fullName;
        case 1:
            return "Kacper Nowak";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michal Wisniewski";
    }
}

const getStudentID = () => {
    switch (id) {
        case 0:
            return studentID;
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
}

module.exports = {
    getStudentFullName,
    getStudentID,
}