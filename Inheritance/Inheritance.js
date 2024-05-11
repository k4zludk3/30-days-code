'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
  constructor(firstName, lastName, idNumber, scores) {
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }

  calculate() {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    let average = sum / this.scores.length;

    if (average >= 90) {
      return 'O'; // Outstanding
    } else if (average >= 80) {
      return 'E'; // Exceeds Expectations
    } else if (average >= 70) {
      return 'A'; // Acceptable
    } else if (average >= 55) {
      return 'P'; // Poor
    } else if (average >= 40) {
      return 'D'; // Dreadful
    } else {
      return 'T'; // Troll
    }
  }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
