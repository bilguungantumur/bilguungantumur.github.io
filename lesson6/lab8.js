// 1.filter function
String.prototype.filter = function (arr) {
    let _this = this;
    for (let i = 0; i < arr.length; i++) {
        _this = _this.replaceAll(arr[i], '');
    }
    return _this;
}

console.log("Being Sam Hyde is spicy".filter(["spicy "]));

// 2.bubble sort
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                let tmp = this[i];
                this[i] = this[j];
                this[j] = tmp;
            }
        }
    }
    return this;
}

console.log([5, 6, 1, 2, -3, 9].bubbleSort());

// 3.teacher teaches a subject
function Person(name) {
    this.name = name;
}

const teacher = new Person("Bat");
Object.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
    return;
}
teacher.teach('WAP');

const person1 = {
    name: ''
};
const teacher1 = Object.create(person1, {name: {value: 'Bat'}});
console.log(teacher1.name);

// Exercise 4

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    }

    salute() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

class Student extends PersonClass {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greeting() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
    }
}

class Professor extends PersonClass {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }

    salute() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department`);
    }
}

const prof = new Professor('Dell', 40, 'CS');
const student = new Student('Apple', '27', 'Computer Science');
prof.greeting();
prof.salute();

student.greeting();
student.salute();

const prof1 = Object.create({}, {
    name: {value: 'Bat'},
    department: {value: 'CS'},
    greeting: {
        value: function () {
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        }
    },
    salute: {
        value: function () {
            console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department`);
        }
    }
});
const student1 = Object.create({}, {
    name: {value: 'Ken'},
    major: {value: 'Computer Science'},
    greeting: {
        value: function () {
            console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
        }
    },
    salute: {
        value: function () {
            console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
        }
    }
});
prof1.greeting();
prof1.salute();

student1.greeting();
student1.salute();