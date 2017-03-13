var Register = function(firstName, lastName, regYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regYear = regYear;
}
Register.prototype.showDuration = function(currentYear) {
    var years = currentYear - this.regYear;
    return years;
}
Register.prototype.getInfo = function() {
    return this.firstName + " " + this.lastName + " registered at our school in " + this.regYear
}
var inheritsFrom = function(child, parent) {
    child.prototype = Object.create(parent.prototype)
}
var Teacher = function(firstName, lastName, regYear, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regYear = regYear;
    this.department = department;
}
inheritsFrom(Teacher, Register);
Teacher.prototype.getInfo = function() {
    return Register.prototype.getInfo.call(this) + " and teaches in the " + this.department + " department."
}
var Student = function(firstName, lastName, regYear, grade, numOfSubjects) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regYear = regYear;
    this.grade = grade;
    this.numOfSubjects = numOfSubjects;
};
inheritsFrom(Student, Register);
Student.prototype.setGrade = function(totalScore) {
    if (totalScore > this.numOfSubjects * 100) {
        return "Invalid grade!"
    }
    else {
        return grade = totalScore;
    }
}

Student.prototype.getGrade = function() {
            return this.grade;
        }
        
module.exports = {
    Register,
    Teacher,
    Student,
};