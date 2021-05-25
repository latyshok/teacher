function User(name) {
	this.name = name;
	this.sayHello = function sayHello() {
		alert(`Привет, меня зовут ${this.name}.`)
	}
}

let Vasya = new User('Вася');
let Petya = new User('Петя');
let Kirill = new User('Кирилл');

Vasya.sayHello();
Petya.sayHello();
Kirill.sayHello();