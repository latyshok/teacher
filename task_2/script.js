let Vasya = {
	name: "Вася",
	sayHello: function sayHello() {
		alert(`Привет, меня зовут ${this.name}.`);
	}
}


Vasya.sayHello();