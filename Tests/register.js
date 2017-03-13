(function(){
  'use strict';
  var app = require('../Apps/register.js');
  var Register = app.Register;
  var Teacher = app.Teacher;
  var Student = app.Student;
  
  describe("Create a Register Class", function() {
    var member  = new Register('Abiodun', 'Akinoso', 2012);
    it("The register should be a type of object", function() {
      expect(typeof member).toEqual(typeof {});
    });
  });
  describe("Create the Teacher and Student Classes to Inherit from Register Class", function() {  
    var teacher  = new Teacher('Emmanuel', 'Adeboye', 2007, 'Arts');
    it("The teacher class should be an instance of the register class", function() {
      expect(teacher instanceof Register).toBeTruthy();
    });
    var student  = new Student('Afolabi', 'Jombo', 2014, 1006, 12);
    it("The student class should be an instance of the register class", function() {
      expect(student instanceof Register).toBeTruthy();
    });
  });
  
  describe("Check the Properties of the Register, Teacher, and Student Classes", function() {  
    var member  = new Register('Abiodun', 'Akinoso', 2012);  
    it("The firstName should be a property of the classes", function() {
      expect(member.firstName).toBe('Abiodun');
    });
    var teacher  = new Teacher('Emmanuel', 'Adeboye', 2007, 'Arts');
    it("The lastName should be a property of the classes", function() {
      expect(teacher.lastName).toBe('Adeboye');
    });
    var student  = new Student('Afolabi', 'Jombo', 2014, 1006, 12);
    it("The regYear should be a property of the classes", function() {
      expect(student.regYear).toBe(2014);
    });
  });
  describe("Check the Methods of the Register, Teacher, and Student Classes", function() {  
    var member  = new Register('Abiodun', 'Akinoso', 2012);      
    it("The showDuration method of the register class should output the number of years", function() {
      expect(member.showDuration(2017)).toBe(5);
    });
    var teacher = new Teacher('Emmanuel', 'Adeboye', 2007, 'Arts');
    it("The getInfo method of the teacher class should extend the getInfo method of the register class", function() {
      expect(teacher.getInfo()).toBe("Emmanuel Adeboye registered at our school in 2007 and teaches in the Arts department.")
    });
    var student  = new Student('Afolabi', 'Jombo', 2014, 1006, 12);
    it("The getGrade method of the student class should output a valid grade of the student", function() {
      expect(student.getGrade()).toBe(1006)
    });
    it ("The setGrade method should record a valid grade for the student or otherwise return 'Invalid grade!'", function() {
      expect(student.setGrade(3190)).toBe("Invalid grade!")
    });
  });
    
})();