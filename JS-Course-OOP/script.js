'use strict';

//----------------------------------------------------------------------------------------
//----------  CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
//----------------------------------------------------------------------------------------

// const Person = function(firstName, birthYear) {
// 	//	Instance properties
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;

//	!!!...BAD PRACTICE, NEVER DO THIS...!!!
// this.calcAge = function() {
// 	console.log(2037 - this.birthYear);
// };
// };

// const brian = new Person('Brian', 1993);
// console.log(brian);

// 1. New empty object{} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const matilda = new Person('Matilda', 2016);
// const jon = new Person('Jon', 1682);

// console.log(matilda, jon);

// brian, matilda and jon are instances of Person
// console.log(brian instanceof Person);

//----------------------------------------------------------------------------------------
//----------  PROTOTYPES
//----------------------------------------------------------------------------------------

// console.log(Person.prototype);
// Person.prototype.calcAge = function() {
// 	// add method to object prototype
// 	console.log(2037 - this.birthYear);
// };

// brian.calcAge();
// matilda.calcAge();

// console.log(brian.__proto__);
// console.log(brian.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(brian));
// console.log(Person.prototype.isPrototypeOf(Person));
// console.log(Person.__proto__);

// // 	.prototype may be better understand
// //	if you remember that you can simply call it
// //	.prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens'; // add property to object prototype

// console.log(brian.species);
// console.log(brian.hasOwnProperty('firstName'));
// console.log(brian.hasOwnProperty('species'));

//----------------------------------------------------------------------------------------
//----------  PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
//----------------------------------------------------------------------------------------

// //	Object.prototype (top of the prorotype chain)
// console.log(brian.__proto__.__proto__);
// console.log(brian.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [ 3, 5, 4, 3, 22, 555, 3, 3, 4, 22 ]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
// 	return [ ...new Set(this) ];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir((x) => x + 1);

//----------------------------------------------------------------------------------------
//----------  CODING CHALLENGE #1
//----------------------------------------------------------------------------------------

// const Car = function(make, speed) {
// 	this.make = make;
// 	this.speed = speed;
// };

// Car.prototype.accelerate = function() {
// 	this.speed += 10;
// 	console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function() {
// 	this.speed -= 5;
// 	console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();

// mercedes.brake();
// mercedes.accelerate();

//----------------------------------------------------------------------------------------
//---------- ES6 CLASSES
//----------------------------------------------------------------------------------------

// class expression
// const PersonCl = class{}

// class declaration

// class PersonCl {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
// 	//	Methods will be added to .prototype property
// 	claclAge() {
// 		console.log(2037 - this.birthYear);
// 	}
// 	greet() {
// 		console.log(`Hey ${this.firstName}`);
// 	}
// }

// const jessica = new PersonCl('Jessica', 1996);

// console.log(jessica);
// jessica.claclAge();
// jessica.greet();

//-------------------------------------------
// 1. CLASSES ANRE NOT HOISTED
// 2. CLASS ARE FIRST-CLASS CITIZENS
// 3. CLASSES ARE EXECUTED IN STRICT MODE
//-------------------------------------------

// Let's try to use classes for the 1# CHALLENGE

// class Car {
// 	constructor(make, speed) {
// 		this.make = make;
// 		this.speed = speed;
// 	}

// 	accelerate() {
// 		this.speed += 10;
// 		console.log(`The ${this.make} is going with ${this.speed}km/h`);
// 	}
// 	brake() {
// 		this.speed -= 5;
// 		console.log(`The ${this.make} is going with ${this.speed}km/h`);
// 	}
// }

// const bmw = new Car('BMW', 120);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

//----------------------------------------------------------------------------------------
//---------- SETTERS AND GETTERS
//----------------------------------------------------------------------------------------

// const account = {
// 	owner: 'jonas',
// 	movements: [ 200, 530, 120, 300 ],

// 	get latest() {
// 		return this.movements.slice(-1).pop();
// 	},

// 	set latest(mov) {
// 		this.movements.push(mov);
// 	}
// };

// console.log(account.latest);
// account.latest = 500;
// console.log(account);

// //	Get and SET method whith classes

// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}
// 	//	Methods will be added to .prototype property
// 	claclAge() {
// 		console.log(2037 - this.birthYear);
// 	}
// 	greet() {
// 		console.log(`Hey ${this.firstName}`);
// 	}

// 	get age() {
// 		return 2037 - this.birthYear;
// 	}
// 	// Set a property that already exist
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(' ')) this._fullName = name;
// 		else alert(`${name} is not a full name!`);
// 	}

// 	get fullName() {
// 		return this._fullName;
// 	}
// }

// const brian = new PersonCl('Brian Lupu', 1993);
// console.log(brian);
// console.log(brian.age);

// const walter = new PersonCl('Walter', 1948);
// console.log(walter);

//----------------------------------------------------------------------------------------
//---------- STATIC METHODS
//----------------------------------------------------------------------------------------

// Static methods for constructor function

// const Person = function(firstName, birthYear) {
// 	//	Instance properties
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };
// Instance Methods === Static method (for the class object)
// Person.hey = function() {
// 	console.log('Hey There! ✌');
// };

// Person.hey();

// const brian = new Person('Brian', 1993);
// console.log(brian);
// brian.hey();

// Static methods for class

// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}
// 	// Static method
// 	static hey() {
// 		console.log('Hey There! ✌');
// 	}
// }

// const brian = new PersonCl('Brian', 1993);

// PersonCl.hey();
// brian.hey();

//----------------------------------------------------------------------------------------
//---------- OBJECT.CREATE
//----------------------------------------------------------------------------------------

// const PersonProto = {
// 	calcAge() {
// 		console.log(2037 - this.birtYear);
// 	},
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birtYear = birthYear;
// 	}
// };

// const steven = Object.create(PersonProto);

// steven.name = 'Steven';
// steven.birtYear = 1994;
// console.log(steven);
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const brian = Object.create(PersonProto);

// brian.init('Brian', 1993);

// brian.calcAge();

//----------------------------------------------------------------------------------------
//---------- CODING CHALLENGE #2
//----------------------------------------------------------------------------------------

// class Car {
// 	constructor(make, speed) {
// 		this.make = make;
// 		this.speed = speed;
// 	}
// 	accelerate() {
// 		this.speed += 10;
// 		console.log(`The ${this.make} is running with ${this.speed} km/h`);
// 	}
// 	brake() {
// 		this.speed -= 5;
// 		console.log(`The ${this.make} is running with ${this.speed} km/h`);
// 	}
// 	get speedUS() {
// 		return this.speed / 1.6;
// 	}
// 	set speedUS(speed) {
// 		this.speed = speed * 1.6;
// 	}
// }

// const bmw = new Car('BMW', 100);
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// const ford = new Car('Ford', 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// ford.speedUS = 50;
// console.log(ford);

//----------------------------------------------------------------------------------------
//---------- INHERITANCE BETWEEN 'CLASSES': 1.) CONSTRUCTOR FUNCTIONS
//----------------------------------------------------------------------------------------

// const Person = function(firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
// 	console.log(2037 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
// 	Person.call(this, firstName, birthYear);
// 	this.course = course;
// };
// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function() {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 1993, 'Compure Science');

// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//----------------------------------------------------------------------------------------
//---------- CODING CHALLENGE #3
//----------------------------------------------------------------------------------------

// const Car = function(make, speed) {
// 	this.make = make;
// 	this.speed = speed;
// };

// Car.prototype.accelerate = function() {
// 	this.speed += 10;
// 	console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function() {
// 	this.speed -= 5;
// 	console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const EV = function(make, speed, charge) {
// 	Car.call(this, make, speed);
// 	this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
// 	this.charge = chargeTo;
// };
// EV.prototype.accelerate = function() {
// 	this.speed += 20;
// 	this.charge -= 3;
// 	console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
// };

// const tesla = new EV('Tesla', 120, 22);

// tesla.chargeBattery(90);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();

//----------------------------------------------------------------------------------------
//---------- INHERITANCE BETWEEN 'CLASSES': 2.) CLASSES
//----------------------------------------------------------------------------------------

// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}
// 	//	Methods will be added to .prototype property
// 	claclAge() {
// 		console.log(2037 - this.birthYear);
// 	}
// 	greet() {
// 		console.log(`Hey ${this.fullName}`);
// 	}
// 	get age() {
// 		return 2037 - this.birthYear;
// 	}
// 	set fullName(name) {
// 		name.includes(' ') ? (this._fullName = name) : alert(`${name} is not a full name!`);
// 	}
// 	get fullName() {
// 		return this._fullName;
// 	}
// 	static hey() {
// 		console.log(`Hey there✌`);
// 	}
// }

// const brian = new PersonCl('Brian Lupu', 1993);

// class StudentCl extends PersonCl {
// 	constructor(fullName, birthYear, course) {
// 		// Always needs to happen first!
// 		super(fullName, birthYear);
// 		this.course = course;
// 	}
// 	introduce() {
// 		console.log(`My name is ${this.fullName} and I study ${this.course}`);
// 	}
// 	claclAge() {
// 		console.log(
// 			`I am ${2037 - this.birthYear} years old, but like as a student I feel more line ${2037 -
// 				this.birthYear +
// 				10}`
// 		);
// 	}
// }

// const alexandra = new StudentCl('Alexandra Lupu', 1994, 'Computer Science');

// console.log(alexandra);
// alexandra.greet();

// alexandra.introduce();
// // brian.introduce();  // Error message cause brian is a Person NOT a Student
// //												(introduce() ins a Stundet method)

// brian.claclAge(); // calcAge from PersonCl
// alexandra.claclAge(); //  new OverWrite calcAge for StudentCl

//----------------------------------------------------------------------------------------
//---------- INHERITANCE BETWEEN 'CLASSES': 3.) OBJECT.CREATE
//----------------------------------------------------------------------------------------

// const PersonProto = {
// 	calcAge() {
// 		console.log(2037 - this.birtYear);
// 	},
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birtYear = birthYear;
// 	}
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
// 	PersonProto.init.call(this, firstName, birthYear);
// 	this.course = course;
// };

// StudentProto.introduce = function() {
// 	console.log(`My name is ${this.firstName}, and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init('Jay', 1996, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//----------------------------------------------------------------------------------------
//-------(_1_)	ANOTHER CLASSES EXAMPLES
//----------(_2_) ENCAPSULATION: PROTECTED PROPERTIES AND METHODS
//-------------(_3_)	PRIVATE CLASS FIELDS AND METHODS
//----------------------------------------------------------------------------------------

// Public fields

//Private fields

//Private methodas

//Private methods

// There is also  the STATIC version

// class Account {
// 	// 1.) Public fields (instances)
// 	locale = navigator.language;

// 	// 2.) Private fields (use #)

// 		#movements = [];
// 		#pin;
// 		#approvedLoan;

// 	constructor(owner, currency, pin) {
// 		this.owner = owner;
// 		this.currency = currency;
// 		this.#pin = pin;
// 		// protected property _
// 		// this._movements = [];
// 		// this.locale = navigator.language;

// 		console.log(`Thanks for opening an account, ${owner}`);
// 	}
// // 3.) Public methods (public interfaces)

// 	getMovements() {
// 		return this.#movements;
// 	}

// 	deposit(val) {
// 		this.#movements.push(val);
// 		return this;
// 	}
// 	withdraw(val) {
// 		this.deposit(-val);
// 		return this;
// 	}

// 	requestLoan(val) {
// 		if (this.#approveLoan(val)) this.deposit(val);
// 		console.log(`Loan approved`);
// 		return this;
// 	}
// 	static helper(){
// 		console.log('Static Helper');
// 	}
// // 4.) Private methods
// #approveLoan(val) {
// 	return true;
// }
// }

// const acc1 = new Account('Brian', 'EUR', 1111);
// console.log(acc1);

// // acc1._movements.push(250);
// // acc1._movements.push(-250);

// acc1.deposit(500);
// acc1.withdraw(150);

// acc1.requestLoan(1000);
// // acc1.#approveLoan(1000); // PRIVATE method

// console.log(acc1.getMovements());

// console.log(acc1);
// // console.log(#pin); // PRIVATE class fields
// // console.log(acc1.#movements);  // PRIVATE class fields

// Account.helper() // Static method

// ----------------------------------------------------------------------------------------
// ---------- CHAINING METHODS
// ----------------------------------------------------------------------------------------

// acc1.deposit(300).deposit(1000).withdraw(200).requestLoan(25000).withdraw(300);
// console.log(acc1);
// console.log(acc1.getMovements());

// ----------------------------------------------------------------------------------------
// ---------- CODING CHALLENGE #4
// ----------------------------------------------------------------------------------------

class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed}km/h`);
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed}km/h`);
		return this;
	}

	get speedUs() {
		return this.speed / 1.6;
	}

	set speedUs(speed) {
		this.speed = speed * 1.6;
	}
}

class EVCl extends CarCl {
	#charge;
	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}

	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}
	accelerate() {
		this.speed += 20;
		this.#charge -= 3;
		console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`);
		return this;
	}
}

const rivian = new EVCl('Rivian', 120, 23);``

console.log(rivian);
rivian.accelerate().accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();