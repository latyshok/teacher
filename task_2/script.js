let vasya = {
	name: "Вася",
	sayHello: function sayHello() {
		alert(`Привет, меня зовут ${this.name}.`);
	}
}


vasya.sayHello();